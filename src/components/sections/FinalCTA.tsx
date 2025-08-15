'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Next Bestseller is Waiting
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Don't just react — lead the market. Start your free trial today and discover your next winning product.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 