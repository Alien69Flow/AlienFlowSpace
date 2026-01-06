import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
    
    // Simulate API call
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-alien-green/20 to-alien-green/5 backdrop-blur-md 
          border border-alien-green/40 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-alien-green mx-auto mb-4" />
        <h3 className="text-xl font-nasalization text-alien-green mb-2">
          You're In!
        </h3>
        <p className="text-muted-foreground font-exo">
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
      className="bg-gradient-to-br from-alien-space-dark/90 to-alien-space-dark/70 backdrop-blur-md 
        border-2 border-alien-gold/30 rounded-2xl p-8 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-alien-gold/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-alien-gold" />
        </div>
        <div>
          <h3 className="text-xl font-nasalization text-alien-gold">
            Stay Updated
          </h3>
          <p className="text-sm text-muted-foreground font-exo">
            Get the latest news, drops & DAO updates
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-alien-space-light/50 rounded-lg border-2 border-alien-gold/20 
              text-foreground focus:border-alien-green focus:outline-none font-exo 
              transition-colors placeholder:text-muted-foreground"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-alien-gold to-alien-gold-dark hover:from-alien-gold-light hover:to-alien-gold
            text-alien-space-dark font-nasalization py-3 transition-all duration-300 
            hover:shadow-[0_0_20px_rgba(240,216,130,0.4)]"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-alien-space-dark/30 border-t-alien-space-dark rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Subscribe
            </span>
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground font-exo mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default NewsletterSubscription;
