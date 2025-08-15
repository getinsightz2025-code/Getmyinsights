'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { 
  HelpCircle, 
  Shield, 
  Clock, 
  DollarSign, 
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  TrendingUp,
  Globe,
  Target
} from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "How accurate are your trend predictions?",
      answer: "Our AI-powered trend prediction has a 95% accuracy rate for identifying products that will go viral within 2-3 weeks. We analyze thousands of data points including search volume, social media mentions, price movements, and competitor activity to provide highly reliable predictions.",
      icon: Brain,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      question: "Which marketplaces do you currently track?",
      answer: "We currently focus on Temu with comprehensive coverage, and we're rapidly expanding to include Amazon, eBay, Walmart, and other major marketplaces. Our platform is designed to be marketplace-agnostic, so you'll get unified insights across all platforms from a single dashboard.",
      icon: Globe,
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      question: "How does your price intelligence work?",
      answer: "Our price intelligence system monitors competitor pricing in real-time across multiple marketplaces. You'll get instant alerts when prices drop or spike, helping you optimize your pricing strategy and never overpay for inventory. We track price history and provide optimal pricing recommendations.",
      icon: DollarSign,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      question: "How often is the data updated?",
      answer: "Our market data is updated in real-time, with trend analysis refreshed every 2-4 hours. Price intelligence alerts are sent instantly when significant changes are detected. This ensures you always have the most current information to make informed decisions.",
      icon: Clock,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      question: "Can I export reports and data for my team?",
      answer: "Yes! GetInsightZ provides comprehensive reporting and data export capabilities. You can generate PDF reports, export data to CSV/Excel, and share insights with your team. All reports include trend analysis, price intelligence, and market analytics in easy-to-understand formats.",
      icon: TrendingUp,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about GetInsightZ's market intelligence features. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${faq.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <faq.icon className={`w-6 h-6 ${faq.textColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of GetInsightZ's market intelligence features. 
              We typically respond within 2 hours during business hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <CheckCircle className="w-5 h-5" />
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              Free support included with all plans
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 