import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import AlienTag from '@/components/alien/AlienTag';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    toast.success('Welcome to AlienFlowSpace!', {
      description: 'You have been subscribed to our newsletter.'
    });
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-alien-green/40 bg-af-surface/30 p-8 text-center"
      >
        <CheckCircle className="w-12 h-12 text-alien-green mx-auto mb-4" />
        <h3 className="text-xl font-nasalization text-alien-green mb-2">
          You're In!
        </h3>
        <p className="text-sm text-af-text-muted">
          Check your inbox for a welcome message from the AlienFlowSpace team.
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
          <h3 className="text-lg font-nasalization text-alien-gold">
            Stay Updated
          </h3>
          <p className="text-xs text-af-text-muted">
            Get the latest news, drops & DAO updates
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-af-surface-2/50 border border-af-border text-foreground focus:border-alien-green focus:outline-none font-nasalization text-sm transition-colors placeholder:text-af-text-muted"
          style={{ borderRadius: 0 }}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full af-pill af-pill-primary !py-3 !justify-center disabled:opacity-50"
        >
          {isLoading ? (
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

      <p className="text-xs text-af-text-muted mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default NewsletterSubscription;
