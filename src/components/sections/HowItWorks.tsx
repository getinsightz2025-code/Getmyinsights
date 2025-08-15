'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { 
  Search, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Eye,
  Bell,
  Target,
  Smartphone,
  Monitor,
  Globe,
  Activity,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  BarChart3 as BarChart3Icon,
  Play,
  Shield,
  Clock,
  Users,
  Rocket,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  BarChart,
  PieChart,
  LineChart,
  Lightbulb,
  TrendingDown,
  Database,
  Cpu,
  Package,
  ShoppingCart,
  Star,
  Heart,
  Flame,
  Target as TargetIcon,
  Layers,
  Filter,
  RefreshCw,
  TrendingUp as TrendingUpIcon2
} from 'lucide-react';
import { useState } from 'react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "1. Discover Trending Products",
      subtitle: "Find what's hot before everyone else",
      description: "Our AI scans thousands of products across marketplaces to identify emerging trends and viral products before they explode.",
      features: [
        "Real-time trend detection",
        "Viral product alerts",
        "Category-specific insights",
        "Social media correlation"
      ],
      visual: "discovery",
      bgColor: "from-blue-500 to-blue-600",
      textColor: "text-blue-500",
      accentColor: "bg-blue-100",
      iconBg: "bg-blue-500",
      benefits: [
        { icon: Eye, text: "Spot trends 48 hours earlier", value: "48h" },
        { icon: TrendingUp, text: "Viral product detection", value: "95%" },
        { icon: Users, text: "Social media correlation", value: "Real-time" }
      ]
    },
    {
      icon: DollarSign,
      title: "2. Track Price Intelligence",
      subtitle: "Never overpay or underprice again",
      description: "Monitor competitor pricing in real-time, track price history, and get alerts when prices drop or spike.",
      features: [
        "Competitor price tracking",
        "Price drop alerts",
        "Historical price analysis",
        "Optimal pricing recommendations"
      ],
      visual: "pricing",
      bgColor: "from-green-500 to-green-600",
      textColor: "text-green-500",
      accentColor: "bg-green-100",
      iconBg: "bg-green-500",
      benefits: [
        { icon: Bell, text: "Price drop alerts", value: "Instant" },
        { icon: Clock, text: "Historical tracking", value: "2+ years" },
        { icon: Target, text: "Optimal pricing", value: "AI-driven" }
      ]
    },
    {
      icon: BarChart3,
      title: "3. Analyze Market Data",
      subtitle: "Make data-driven decisions",
      description: "Get comprehensive analytics on market performance, customer behavior, and sales opportunities.",
      features: [
        "Market size analysis",
        "Customer sentiment tracking",
        "Sales velocity metrics",
        "Demand forecasting"
      ],
      visual: "analytics",
      bgColor: "from-purple-500 to-purple-600",
      textColor: "text-purple-500",
      accentColor: "bg-purple-100",
      iconBg: "bg-purple-500",
      benefits: [
        { icon: Activity, text: "Real-time analytics", value: "Live" },
        { icon: Shield, text: "Data accuracy", value: "99.9%" },
        { icon: Globe, text: "Multi-platform data", value: "5+ platforms" }
      ]
    },
    {
      icon: TrendingUp,
      title: "4. Scale Your Business",
      subtitle: "Optimize and grow with confidence",
      description: "Use insights to optimize your listings, expand to new markets, and scale your business strategically.",
      features: [
        "Listing optimization",
        "Multi-platform scaling",
        "Inventory planning",
        "Growth strategies"
      ],
      visual: "scaling",
      bgColor: "from-orange-500 to-orange-600",
      textColor: "text-orange-500",
      accentColor: "bg-orange-100",
      iconBg: "bg-orange-500",
      benefits: [
        { icon: Rocket, text: "Revenue growth", value: "+45%" },
        { icon: Monitor, text: "Platform expansion", value: "5+ markets" },
        { icon: TrendingUp, text: "Efficiency boost", value: "3x faster" }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <Zap className="w-4 h-4" />
            Simple 4-Step Process
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            How GetInsightZ
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovering the next viral product to scaling your business, 
            we've streamlined the entire process into four powerful steps
          </p>
        </motion.div>

        {/* Process Flow Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${step.bgColor} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className={`w-5 h-5 ${step.textColor} flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {step.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className={`${step.accentColor} rounded-xl p-4 text-center`}
                    >
                      <div className={`w-8 h-8 ${step.iconBg} text-white rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <benefit.icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{benefit.text}</p>
                      <p className={`text-lg font-bold ${step.textColor}`}>{benefit.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${step.bgColor} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Creative Animation Side */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-full max-w-lg"
                >
                  {/* Creative Animation Container */}
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                    {/* Step-specific Creative Animations */}
                    <div className="relative z-10">
                      {step.visual === "discovery" && (
                        <div className="space-y-6">
                          {/* Floating Products Animation */}
                          <div className="relative h-32 mb-6">
                            {/* Product 1 */}
                            <motion.div
                              className="absolute top-4 left-4 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center"
                              animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Package className="w-8 h-8 text-blue-600" />
                            </motion.div>
                            
                            {/* Product 2 */}
                            <motion.div
                              className="absolute top-8 right-8 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                              animate={{ 
                                y: [0, -15, 0],
                                rotate: [0, -5, 5, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <ShoppingCart className="w-6 h-6 text-purple-600" />
                            </motion.div>
                            
                            {/* Product 3 */}
                            <motion.div
                              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center"
                              animate={{ 
                                y: [0, -8, 0],
                                rotate: [0, 3, -3, 0],
                                scale: [1, 1.08, 1]
                              }}
                              transition={{ 
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <Star className="w-7 h-7 text-green-600" />
                            </motion.div>
                            
                            {/* Trending Fire */}
                            <motion.div
                              className="absolute top-2 right-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, 360]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Flame className="w-4 h-4 text-red-600" />
                            </motion.div>
                          </div>
                          
                          {/* Scanning Animation */}
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
                              animate={{ 
                                x: [0, 10, 0],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <motion.div
                                className="w-3 h-3 bg-blue-500 rounded-full"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0.5, 1]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <span className="text-sm font-medium text-gray-700">Scanning products...</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl"
                              animate={{ 
                                x: [0, 10, 0],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <motion.div
                                className="w-3 h-3 bg-purple-500 rounded-full"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0.5, 1]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }}
                              />
                              <span className="text-sm font-medium text-gray-700">Analyzing trends...</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl"
                              animate={{ 
                                x: [0, 10, 0],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <motion.div
                                className="w-3 h-3 bg-green-500 rounded-full"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0.5, 1]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 1
                                }}
                              />
                              <span className="text-sm font-medium text-gray-700">Trend detected!</span>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {step.visual === "pricing" && (
                        <div className="space-y-6">
                          {/* Price Tags Animation */}
                          <div className="relative h-32 mb-6">
                            {/* Price Tag 1 */}
                            <motion.div
                              className="absolute top-4 left-4 bg-red-100 rounded-lg p-3"
                              animate={{ 
                                y: [0, -8, 0],
                                rotate: [0, -2, 2, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div className="text-center">
                                <div className="text-lg font-bold text-red-600">$29.99</div>
                                <div className="text-xs text-gray-600">Competitor A</div>
                              </div>
                            </motion.div>
                            
                            {/* Price Tag 2 */}
                            <motion.div
                              className="absolute top-8 right-8 bg-yellow-100 rounded-lg p-3"
                              animate={{ 
                                y: [0, -12, 0],
                                rotate: [0, 2, -2, 0]
                              }}
                              transition={{ 
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <div className="text-center">
                                <div className="text-lg font-bold text-yellow-600">$24.99</div>
                                <div className="text-xs text-gray-600">Competitor B</div>
                              </div>
                            </motion.div>
                            
                            {/* Your Price */}
                            <motion.div
                              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 rounded-lg p-3 border-2 border-green-300"
                              animate={{ 
                                y: [0, -6, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-700">$22.99</div>
                                <div className="text-xs text-gray-600">Your Price</div>
                              </div>
                            </motion.div>
                            
                            {/* Price Drop Arrow */}
                            <motion.div
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <TrendingDown className="w-3 h-3 text-white" />
                            </motion.div>
                          </div>
                          
                          {/* Price Tracking Animation */}
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl"
                              animate={{ 
                                boxShadow: [
                                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                                  "0 0 0 8px rgba(34, 197, 94, 0)",
                                  "0 0 0 0 rgba(34, 197, 94, 0)"
                                ]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            >
                              <Bell className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-700">Price drop alert!</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
                              animate={{ 
                                x: [0, 5, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <TargetIcon className="w-5 h-5 text-blue-600" />
                              <span className="text-sm font-medium text-gray-700">Optimal price found</span>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {step.visual === "analytics" && (
                        <div className="space-y-6">
                          {/* Data Visualization Animation */}
                          <div className="relative h-32 mb-6">
                            {/* Chart Bars */}
                            <div className="flex items-end justify-center gap-2 h-20">
                              <motion.div
                                className="w-4 bg-purple-500 rounded-t"
                                animate={{ 
                                  height: [20, 40, 20],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <motion.div
                                className="w-4 bg-blue-500 rounded-t"
                                animate={{ 
                                  height: [30, 60, 30],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.3
                                }}
                              />
                              <motion.div
                                className="w-4 bg-green-500 rounded-t"
                                animate={{ 
                                  height: [25, 50, 25],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.6
                                }}
                              />
                              <motion.div
                                className="w-4 bg-orange-500 rounded-t"
                                animate={{ 
                                  height: [35, 70, 35],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.9
                                }}
                              />
                            </div>
                            
                            {/* Floating Data Points */}
                            <motion.div
                              className="absolute top-2 left-2 w-3 h-3 bg-purple-400 rounded-full"
                              animate={{ 
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                                scale: [1, 1.5, 1]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <motion.div
                              className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                              animate={{ 
                                y: [0, -8, 0],
                                x: [0, -3, 0],
                                scale: [1, 1.3, 1]
                              }}
                              transition={{ 
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            />
                            <motion.div
                              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"
                              animate={{ 
                                y: [0, -6, 0],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                          </div>
                          
                          {/* Analytics Metrics */}
                          <div className="grid grid-cols-2 gap-3">
                            <motion.div 
                              className="bg-purple-50 rounded-xl p-3 text-center"
                              whileHover={{ scale: 1.05 }}
                              animate={{ 
                                y: [0, -3, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div className="text-xl font-bold text-purple-600">2.4M</div>
                              <div className="text-xs text-gray-600">Products</div>
                            </motion.div>
                            
                            <motion.div 
                              className="bg-blue-50 rounded-xl p-3 text-center"
                              whileHover={{ scale: 1.05 }}
                              animate={{ 
                                y: [0, -3, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <div className="text-xl font-bold text-blue-600">89%</div>
                              <div className="text-xs text-gray-600">Accuracy</div>
                            </motion.div>
                            
                            <motion.div 
                              className="bg-green-50 rounded-xl p-3 text-center"
                              whileHover={{ scale: 1.05 }}
                              animate={{ 
                                y: [0, -3, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <div className="text-xl font-bold text-green-600">24/7</div>
                              <div className="text-xs text-gray-600">Monitoring</div>
                            </motion.div>
                            
                            <motion.div 
                              className="bg-orange-50 rounded-xl p-3 text-center"
                              whileHover={{ scale: 1.05 }}
                              animate={{ 
                                y: [0, -3, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                              }}
                            >
                              <div className="text-xl font-bold text-orange-600">5+</div>
                              <div className="text-xs text-gray-600">Platforms</div>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {step.visual === "scaling" && (
                        <div className="space-y-6">
                          {/* Growth Animation */}
                          <div className="relative h-32 mb-6">
                            {/* Rocket Launch */}
                            <motion.div
                              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                              animate={{ 
                                y: [0, -60, 0],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Rocket className="w-12 h-12 text-orange-500" />
                            </motion.div>
                            
                            {/* Growth Lines */}
                            <motion.div
                              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-orange-500 to-transparent"
                              animate={{ 
                                height: [20, 40, 20],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* Success Stars */}
                            <motion.div
                              className="absolute top-4 left-4 w-4 h-4 text-yellow-500"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                rotate: [0, 180, 360]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Star className="w-full h-full" />
                            </motion.div>
                            
                            <motion.div
                              className="absolute top-8 right-6 w-3 h-3 text-yellow-500"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, -180, -360]
                              }}
                              transition={{ 
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <Star className="w-full h-full" />
                            </motion.div>
                            
                            <motion.div
                              className="absolute top-2 right-2 w-2 h-2 text-yellow-500"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 180]
                              }}
                              transition={{ 
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <Star className="w-full h-full" />
                            </motion.div>
                          </div>
                          
                          {/* Growth Metrics */}
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl"
                              animate={{ 
                                x: [0, 5, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <TrendingUpIcon2 className="w-5 h-5 text-orange-600" />
                              <span className="text-sm font-medium text-gray-700 flex-1">Revenue Growth</span>
                              <span className="text-lg font-bold text-orange-600">+45%</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
                              animate={{ 
                                x: [0, -5, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <Globe className="w-5 h-5 text-blue-600" />
                              <span className="text-sm font-medium text-gray-700 flex-1">Market Expansion</span>
                              <span className="text-lg font-bold text-blue-600">5+</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl"
                              animate={{ 
                                x: [0, 5, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            >
                              <Zap className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-700 flex-1">Efficiency Boost</span>
                              <span className="text-lg font-bold text-green-600">3x</span>
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Process Flow Connector */}
        <div className="hidden lg:block mt-16">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${step.iconBg} text-white rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 h-1 bg-gray-300 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 