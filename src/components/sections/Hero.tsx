'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Users, Eye, DollarSign, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Container>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-200"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Market Intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Master Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Market Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 font-medium max-w-3xl mx-auto"
            >
              GetInsightZ provides real-time market intelligence, competitor analysis, and trend insights for Amazon, eBay, and other e-commerce platforms.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <BarChart3 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Competitor Analysis</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Trend Insights</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                className="group bg-blue-600 text-white hover:bg-blue-700 shadow-lg text-lg px-8 py-4 font-semibold"
                onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 font-semibold shadow-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Features
              </Button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <div className="flex items-center bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-200">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                <span>500+ Early Adopters</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-200">
                <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                <span>Free Early Access</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-200">
                <Eye className="w-4 h-4 mr-2 text-purple-600" />
                <span>Real-time Monitoring</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
} 