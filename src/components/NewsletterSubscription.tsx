import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import { sfx } from '@/lib/sound';
import { trackEvent } from '@/lib/analytics';
import { supabase } from '@/integrations/supabase/client';
import {
  isValidEmail,
  buildMailtoUrl,
  contactEmail,
} from '@/lib/newsletter';

type Status = 'idle' | 'submitting' | 'subscribed' | 'confirmEmail' | 'error';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();

    if (!isValidEmail(trimmed)) {
      sfx.error();
      setStatus('error');
      setMessage('That address looks incomplete — please check it and try again.');
      return;
    }

    setStatus('submitting');
    setMessage('');
    trackEvent('newsletter_submit', { source: 'supabase' });

    try {
      const { data: existing } = await supabase
        .from('newsletter_subscribers')
        .select('id, status')
        .eq('email', trimmed)
        .maybeSingle();

      if (existing) {
        if (existing.status === 'active') {
          sfx.success();
          trackEvent('newsletter_success', { mode: 'already' });
          setAlreadySubscribed(true);
          setStatus('subscribed');
          return;
        }

        const { error: updateErr } = await supabase
          .from('newsletter_subscribers')
          .update({ status: 'active', subscribed_at: new Date().toISOString(), updated_at: new Date().toISOString() })
          .eq('id', existing.id);

        if (updateErr) throw updateErr;
        sfx.success();
        trackEvent('newsletter_success', { mode: 'reactivated' });
        setAlreadySubscribed(false);
        setStatus('subscribed');
        return;
      }

      const { error: insertErr } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: trimmed,
          source: 'alienflow.space',
          status: 'active',
        });

      if (insertErr) {
        if (insertErr.code === '23505') {
          sfx.success();
          trackEvent('newsletter_success', { mode: 'already' });
          setAlreadySubscribed(true);
          setStatus('subscribed');
          return;
        }
        throw insertErr;
      }

      sfx.success();
      trackEvent('newsletter_success', { mode: 'new' });
      setAlreadySubscribed(false);
      setStatus('subscribed');
    } catch {
      sfx.error();
      trackEvent('newsletter_error');
      setStatus('error');
      setMessage('We could not save your address just now. Please try again in a moment.');
    }
  };

  if (status === 'subscribed') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-alien-green/40 bg-af-surface/30 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle className="w-12 h-12 text-alien-green mx-auto mb-4" />
        <h3 className="text-xl font-nasalization text-alien-green mb-2">You're on the list</h3>
        <p className="text-sm text-af-text-muted">
          {alreadySubscribed ? (
            <>
              <span className="text-foreground">{email.trim()}</span> was already on the list —
              there is nothing else to do.
            </>
          ) : (
            <>
              We saved <span className="text-foreground">{email.trim()}</span>. You will get the
              next issue as soon as it goes out.
            </>
          )}
        </p>
      </motion.div>
    );
  }

  if (status === 'confirmEmail') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-af-border bg-af-surface/30 p-6 md:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-5 h-5 text-alien-gold" />
          <h3 className="text-lg font-nasalization text-alien-gold">One last step</h3>
        </div>
        <p className="af-prose af-prose-dim text-sm mb-4">
          We opened your email app with a message ready to send. Press <strong>send</strong> and the
          team will add you. Nothing was stored yet.
        </p>
        <a
          href={buildMailtoUrl(email)}
          className="af-pill af-pill-primary !py-3 !justify-center w-full"
        >
          <Send className="w-4 h-4" /> Open email app again
        </a>
        <p className="text-xs text-af-text-muted mt-4 text-center">
          Or write to <span className="text-foreground">{contactEmail}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-af-border bg-af-surface/30 p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <AlienTag color="gold">NEWSLETTER</AlienTag>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-5 h-5 text-alien-gold" />
        <div>
          <h3 className="text-lg font-nasalization text-alien-gold">Stay Updated</h3>
          <p className="text-xs text-af-text-muted">Get the latest news, drops, bonuses, discounts &amp; DAO updates</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'newsletter-status' : undefined}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-af-surface-2/50 border border-af-border text-foreground focus:border-alien-green focus:outline-none font-nasalization text-sm transition-colors placeholder:text-af-text-muted"
          style={{ borderRadius: 0 }}
        />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full af-pill af-pill-primary !py-3 !justify-center disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-af-bg/30 border-t-af-bg rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Subscribe
            </span>
          )}
        </button>
      </form>

      <div id="newsletter-status" role="alert" aria-live="assertive">
        {status === 'error' && (
          <p className="flex items-start gap-2 text-xs text-af-danger mt-3">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-px" />
            <span>
              {message}{' '}
              <a
                href={buildMailtoUrl(email)}
                className="underline hover:text-alien-gold"
              >
                Write to us instead
              </a>
              .
            </span>
          </p>
        )}
      </div>

      <p className="text-xs text-af-text-muted mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default NewsletterSubscription;
