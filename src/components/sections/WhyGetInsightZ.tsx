'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { 
  Zap, 
  Target, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Brain,
  Globe,
  Sparkles,
  Award,
  Rocket,
  DollarSign
} from 'lucide-react';

export function WhyGetInsightZ() {
  const uniqueAdvantages = [
    {
      title: "AI-Powered Trend Prediction",
      subtitle: "See the future before it happens",
      description: "Our proprietary AI algorithms analyze thousands of data points to predict trending products 2-3 weeks before they go viral. No more guessing games.",
      icon: Brain,
      bgColor: "from-blue-500 to-blue-600",
      highlightBg: "bg-blue-100",
      highlightText: "text-blue-600"
    },
    {
      title: "Real-Time Market Intelligence",
      subtitle: "Live data, not yesterday's news",
      description: "Get instant alerts on price changes, stock levels, and competitor moves. While others react, you act with confidence.",
      icon: Clock,
      bgColor: "from-green-500 to-green-600",
      highlightBg: "bg-green-100",
      highlightText: "text-green-600"
    },
    {
      title: "Multi-Platform Intelligence",
      subtitle: "One dashboard, all marketplaces",
      description: "Track trends across Temu, Amazon, eBay, and more from a single interface. No more juggling multiple tools and platforms.",
      icon: Globe,
      bgColor: "from-purple-500 to-purple-600",
      highlightBg: "bg-purple-100",
      highlightText: "text-purple-600"
    },
    {
      title: "Zero Setup Required",
      subtitle: "Start getting insights in minutes",
      description: "No API integrations, no data connections, no complex setup. Just sign up and start discovering opportunities immediately.",
      icon: Rocket,
      bgColor: "from-orange-500 to-orange-600",
      highlightBg: "bg-orange-100",
      highlightText: "text-orange-600"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "vs. Manual Research",
      icon: Users,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      advantages: [
        "Save 20+ hours per week",
        "Never miss trending products",
        "Get real-time alerts",
        "Access historical data"
      ],
      disadvantage: "Manual research is slow, incomplete, and reactive"
    },
    {
      title: "vs. Generic Analytics Tools",
      icon: TrendingUp,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      advantages: [
        "E-commerce specific insights",
        "Trend prediction vs. reporting",
        "Actionable recommendations",
        "Competitor tracking"
      ],
      disadvantage: "Generic tools lack e-commerce focus and actionable insights"
    },
    {
      title: "vs. Expensive Enterprise Solutions",
      icon: DollarSign,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      advantages: [
        "Affordable for small businesses",
        "No long-term contracts",
        "Pay-as-you-grow pricing",
        "Full feature access"
      ],
      disadvantage: "Enterprise solutions are expensive and overkill for most sellers"
    }
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: "Data Privacy First",
      description: "We never access your store data. All insights come from public market data analysis."
    },
    {
      icon: Target,
      title: "E-commerce Focused",
      description: "Built specifically for online sellers, not generic business intelligence."
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge AI",
      description: "Latest machine learning algorithms trained on millions of product data points."
    },
    {
      icon: Award,
      title: "Proven Methodology",
      description: "Based on successful strategies used by top-performing e-commerce businesses."
    }
  ];

  return (
    <section id="why-getinsightz" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <Star className="w-4 h-4" />
            Why Choose GetInsightZ
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Makes GetInsightZ
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In a world of generic analytics tools and expensive enterprise solutions, 
            GetInsightZ is built specifically for e-commerce sellers who want real results, fast.
          </p>
        </motion.div>

        {/* Unique Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Unique Advantages
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Features that set us apart from every other market intelligence tool
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uniqueAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${advantage.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">{advantage.subtitle}</p>
                    </div>
                    <div className={`text-xs font-bold ${advantage.highlightBg} ${advantage.highlightText} px-3 py-1 rounded-full`}>
                      {advantage.title === "AI-Powered Trend Prediction" && "95% accuracy rate"}
                      {advantage.title === "Real-Time Market Intelligence" && "24/7 monitoring"}
                      {advantage.title === "Multi-Platform Intelligence" && "5+ platforms"}
                      {advantage.title === "Zero Setup Required" && "2-minute setup"}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Exclusive to GetInsightZ</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why GetInsightZ Wins
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we stack up against the alternatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitiveAdvantages.map((comparison, index) => (
              <motion.div
                key={comparison.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${comparison.bgColor} rounded-xl flex items-center justify-center`}>
                    <comparison.icon className={`w-5 h-5 ${comparison.textColor}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900">{comparison.title}</h4>
                </div>
                
                <div className="space-y-3 mb-6">
                  {comparison.advantages.map((advantage, advIndex) => (
                    <div key={advIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-sm text-red-700 font-medium">{comparison.disadvantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Trust
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why thousands of sellers trust GetInsightZ with their business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{factor.title}</h4>
                <p className="text-sm text-gray-600">{factor.description}</p>
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
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing community of sellers who&apos;ve discovered what real market intelligence looks like
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
              Be among the first to experience the future of market intelligence
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 