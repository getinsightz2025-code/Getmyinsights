'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Search, 
  Bell, 
  Eye, 
  ArrowRight,
  Zap,
  Target,
  Clock,
  Users,
  Star,
  TrendingDown,
  CheckCircle,
  Globe,
  Smartphone,
  Monitor,
  Filter,
  Settings,
  Download,
  Share2,
  AlertTriangle,
  X,
  CheckCircle2,
  Timer,
  Award,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  BarChart as BarChartIcon
} from 'lucide-react';

export function DemoSection() {
  const marketRealities = [
    {
      scenario: "Without Market Intelligence",
      icon: X,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      highlightBg: "bg-red-50",
      highlightText: "text-red-700",
      borderColor: "border-red-100",
      dotColor: "bg-red-500",
      problems: [
        "Miss trending products by 2-3 weeks",
        "Overpay for inventory by 15-25%",
        "Lose sales to competitors",
        "Make decisions based on gut feeling"
      ],
      impact: "Average loss: $50,000/year"
    },
    {
      scenario: "With Market Intelligence",
      icon: CheckCircle2,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      highlightBg: "bg-green-50",
      highlightText: "text-green-700",
      borderColor: "border-green-100",
      dotColor: "bg-green-500",
      problems: [
        "Spot trends before they go viral",
        "Get optimal pricing in real-time",
        "Stay ahead of competition",
        "Make data-driven decisions"
      ],
      impact: "Average gain: $150,000/year"
    }
  ];

  const industryStats = [
    {
      stat: "$4.2T",
      label: "Global e-commerce market size",
      icon: GlobeIcon,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      stat: "23%",
      label: "Annual e-commerce growth rate",
      icon: TrendingUpIcon,
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      stat: "2.3M",
      label: "Active online sellers worldwide",
      icon: UsersIcon,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      stat: "67%",
      label: "Sellers who struggle with pricing",
      icon: BarChartIcon,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  const marketOpportunity = [
    {
      title: "Massive Market Opportunity",
      description: "The e-commerce market is exploding, but most sellers are flying blind. They're missing trends, overpaying for inventory, and losing sales to competitors.",
      icon: Globe,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Technology Gap",
      description: "Most sellers rely on manual research and gut feelings. They need AI-powered tools that can analyze thousands of data points in real-time.",
      icon: Smartphone,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Competitive Advantage",
      description: "Early adopters of market intelligence tools are already seeing 3-5x better results than their competitors. The gap is widening every day.",
      icon: Target,
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    }
  ];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <BarChart3 className="w-4 h-4" />
            Market Reality Check
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Market
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the real impact of market intelligence on e-commerce businesses. 
            The numbers don't lie - those with the right tools are winning big.
          </p>
        </motion.div>

        {/* Market Reality Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketRealities.map((reality, index) => (
              <motion.div
                key={reality.scenario}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${reality.bgColor} rounded-xl flex items-center justify-center`}>
                      <reality.icon className={`w-6 h-6 ${reality.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{reality.scenario}</h3>
                      <p className={`text-sm font-medium ${reality.textColor}`}>
                        {reality.scenario === "Without Market Intelligence" ? "The Problem" : "The Solution"}
                      </p>
                    </div>
                    <div className={`w-2 h-2 ${reality.dotColor} rounded-full flex-shrink-0`}></div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {reality.problems.map((problem, probIndex) => (
                      <div key={probIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${reality.dotColor} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-700">{problem}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`${reality.highlightBg} rounded-2xl p-4 border ${reality.borderColor}`}>
                    <p className="text-sm text-gray-600 mb-1">Impact</p>
                    <p className={`text-2xl font-bold ${reality.highlightText}`}>{reality.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Statistics
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The e-commerce landscape is massive and growing rapidly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`${stat.bgColor} rounded-xl p-3 text-center`}>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.textColor} overflow-hidden`}>
                    {stat.stat}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Now?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The perfect storm of market conditions creates unprecedented opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketOpportunity.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 ${opportunity.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <opportunity.icon className={`w-6 h-6 ${opportunity.textColor}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{opportunity.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join the Winners?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't let your competitors get ahead. Join the waitlist and be among the first to experience 
              the future of market intelligence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
              onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5" />
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              Limited spots available for early access
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 