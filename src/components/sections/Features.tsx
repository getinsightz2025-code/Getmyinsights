'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  BarChart3, 
  Search, 
  LayoutDashboard, 
  Globe, 
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Product Trend Discovery",
      description: "Get early alerts on trending products before they go viral. Spot the next big thing before your competitors.",
      highlight: "+1,247% views",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      highlightBg: "bg-blue-50",
      highlightText: "text-blue-700"
    },
    {
      icon: DollarSign,
      title: "Pricing Intelligence",
      description: "Track competitor pricing in real-time. Never overpay or underprice your products again.",
      highlight: "-15% price drop",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      highlightBg: "bg-green-50",
      highlightText: "text-green-700"
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Comprehensive insights on market performance, customer behavior, and sales opportunities.",
      highlight: "+45% revenue",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      highlightBg: "bg-purple-50",
      highlightText: "text-purple-700"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Optimize your listings with data-driven keyword insights and performance tracking.",
      highlight: "+89% visibility",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      highlightBg: "bg-orange-50",
      highlightText: "text-orange-700"
    },
    {
      icon: Package,
      title: "Inventory Alerts",
      description: "Monitor stock levels and supply chain disruptions to avoid stockouts.",
      highlight: "3 days lead time",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      highlightBg: "bg-indigo-50",
      highlightText: "text-indigo-700"
    },
    {
      icon: Users,
      title: "Social Media Tracking",
      description: "Track trending products and influencers driving sales across social platforms.",
      highlight: "2.3M mentions",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      highlightBg: "bg-pink-50",
      highlightText: "text-pink-700"
    },
    {
      icon: LayoutDashboard,
      title: "Smart Dashboard",
      description: "Custom dashboards with real-time data and actionable insights at your fingertips.",
      highlight: "24/7 monitoring",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      highlightBg: "bg-teal-50",
      highlightText: "text-teal-700"
    },
    {
      icon: Globe,
      title: "Multi-Platform Scaling",
      description: "Scale your business across multiple marketplaces with unified insights and optimization.",
      highlight: "5 platforms",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
      highlightBg: "bg-cyan-50",
      highlightText: "text-cyan-700"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to dominate your market and stay ahead of the competition
          </p>
        </motion.div>

        {/* Clean Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlight */}
                <div className={`inline-flex items-center gap-2 ${feature.highlightBg} ${feature.highlightText} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Zap className="w-3 h-3" />
                  {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
} 