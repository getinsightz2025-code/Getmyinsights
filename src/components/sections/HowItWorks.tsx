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
  BarChart3 as BarChart3Icon
} from 'lucide-react';
import { useState, useEffect } from 'react';
export function HowItWorks() {
  // Dynamic data state for preview cards
  const [previewData, setPreviewData] = useState({
    trendingGrowth: 1247,
    trendingProducts: [
      { product: "Wireless Earbuds", price: 29.99, views: 89 },
      { product: "Smart Watch", price: 45.99, views: 67 },
      { product: "Gaming Controller", price: 39.99, views: 123 }
    ],
    priceDrops: [
      { product: "Gaming Mouse", old: 45.99, new: 29.99 },
      { product: "Bluetooth Speaker", old: 89.99, new: 67.50 },
      { product: "Wireless Headphones", old: 129.99, new: 99.99 }
    ],
    analytics: {
      marketGrowth: 23,
      insights: 156,
      accuracy: 89,
      products: 2.4
    },
    scaling: [
      { platform: "Amazon", growth: 45 },
      { platform: "eBay", growth: 23 },
      { platform: "Temu", growth: 67 }
    ]
  });

  // Seamless number updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviewData(prev => ({
        trendingGrowth: prev.trendingGrowth + Math.floor(Math.random() * 100) - 50,
        trendingProducts: prev.trendingProducts.map(product => ({
          ...product,
          price: Math.max(1, product.price + (Math.random() * 10 - 5)),
          views: Math.max(0, product.views + Math.floor(Math.random() * 20) - 10)
        })),
        priceDrops: prev.priceDrops.map(drop => ({
          ...drop,
          new: Math.max(1, drop.new + (Math.random() * 10 - 5)),
          old: Math.max(1, drop.old + (Math.random() * 10 - 5))
        })),
        analytics: {
          marketGrowth: Math.max(0, prev.analytics.marketGrowth + (Math.random() * 4 - 2)),
          insights: Math.max(0, prev.analytics.insights + Math.floor(Math.random() * 20) - 10),
          accuracy: Math.max(0, Math.min(100, prev.analytics.accuracy + (Math.random() * 4 - 2))),
          products: Math.max(0, prev.analytics.products + (Math.random() * 0.5 - 0.25))
        },
        scaling: prev.scaling.map(platform => ({
          ...platform,
          growth: Math.max(0, platform.growth + Math.floor(Math.random() * 10) - 5)
        }))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      visual: "trending",
      bgColor: "from-blue-500 to-blue-600",
      textColor: "text-blue-500",
      overlayColor: "from-blue-50/50 via-blue-100/30 to-blue-200/20",
      dotColor: "from-blue-400 to-blue-500"
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
      overlayColor: "from-green-50/50 via-green-100/30 to-green-200/20",
      dotColor: "from-green-400 to-green-500"
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
      overlayColor: "from-purple-50/50 via-purple-100/30 to-purple-200/20",
      dotColor: "from-purple-400 to-purple-500"
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
      overlayColor: "from-orange-50/50 via-orange-100/30 to-orange-200/20",
      dotColor: "from-orange-400 to-orange-500"
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



        {/* Enhanced Steps */}
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
                                      <div className={`w-12 h-12 bg-gradient-to-r ${step.bgColor} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
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

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${step.bgColor} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Visual Side */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative"
                >
                  {/* Main Card */}
                  <div className={`bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-100 relative overflow-hidden`}>
                    {/* Liquid Background Effect */}
                    <div className="absolute inset-0">
                      <motion.div 
                        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${step.overlayColor}`}
                        animate={{ 
                          background: [
                            `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)`,
                            `linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)`,
                            `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)`,
                            `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)`
                          ]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Floating Liquid Bubbles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-3 h-3 bg-gradient-to-r ${step.dotColor} rounded-full opacity-30`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 25}%`,
                          }}
                          animate={{ 
                            y: [0, -15, 0],
                            x: [0, 8, 0],
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ 
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Card Content based on step */}
                    <div className="relative">
                      {step.visual === "trending" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <motion.div 
                              className="flex items-center gap-2"
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <motion.div
                                className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-white text-xs">🔥</span>
                              </motion.div>
                              <h4 className="text-lg font-semibold text-gray-900">Trending Products</h4>
                            </motion.div>
                            <motion.span 
                              key={previewData.trendingGrowth}
                              className="text-sm text-green-600 font-semibold overflow-hidden"
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                +{previewData.trendingGrowth.toLocaleString()}%
                              </motion.div>
                            </motion.span>
                          </div>
                          <div className="space-y-3">
                            {previewData.trendingProducts.map((product, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div 
                                  className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                >
                                  <span className="text-white text-xs">📱</span>
                                </motion.div>
                                <div className="flex-1">
                                  <p className="font-semibold text-gray-900">{product.product}</p>
                                  <p className="text-sm text-gray-600">Electronics</p>
                                </div>
                                <div className="text-right">
                                  <motion.p 
                                    key={product.price}
                                    className="font-bold text-green-600 overflow-hidden"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      ${product.price.toFixed(2)}
                                    </motion.div>
                                  </motion.p>
                                  <motion.p 
                                    key={product.views}
                                    className="text-xs text-gray-500 overflow-hidden"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      +{product.views}% views
                                    </motion.div>
                                  </motion.p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.visual === "pricing" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <motion.div 
                              className="flex items-center gap-2"
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <motion.div
                                className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-white text-xs">💰</span>
                              </motion.div>
                              <h4 className="text-lg font-semibold text-gray-900">Price Intelligence</h4>
                            </motion.div>
                            <motion.span 
                              className="text-sm text-blue-600 font-semibold"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Live
                            </motion.span>
                          </div>
                          <div className="space-y-3">
                            {previewData.priceDrops.map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div 
                                  className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                >
                                  <span className="text-white text-xs">💰</span>
                                </motion.div>
                                <div className="flex-1">
                                  <p className="font-semibold text-gray-900">{item.product}</p>
                                  <p className="text-sm text-gray-600">Price Drop Alert</p>
                                </div>
                                <div className="text-right">
                                  <motion.p 
                                    key={item.new}
                                    className="font-bold text-red-600 overflow-hidden"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      ${item.new.toFixed(2)}
                                    </motion.div>
                                  </motion.p>
                                  <motion.p 
                                    key={item.old}
                                    className="text-xs text-gray-500 line-through overflow-hidden"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      ${item.old.toFixed(2)}
                                    </motion.div>
                                  </motion.p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.visual === "analytics" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <motion.div 
                              className="flex items-center gap-2"
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <motion.div
                                className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-white text-xs">📊</span>
                              </motion.div>
                              <h4 className="text-lg font-semibold text-gray-900">Market Analytics</h4>
                            </motion.div>
                            <motion.span 
                              className="text-sm text-purple-600 font-semibold"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Real-time
                            </motion.span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { value: `+${previewData.analytics.marketGrowth}%`, label: "Market Growth", bgColor: "bg-purple-50", textColor: "text-purple-600", key: previewData.analytics.marketGrowth },
                              { value: previewData.analytics.insights.toString(), label: "Insights", bgColor: "bg-blue-50", textColor: "text-blue-600", key: previewData.analytics.insights },
                              { value: `${previewData.analytics.accuracy}%`, label: "Accuracy", bgColor: "bg-green-50", textColor: "text-green-600", key: previewData.analytics.accuracy },
                              { value: `${previewData.analytics.products.toFixed(1)}M`, label: "Products", bgColor: "bg-orange-50", textColor: "text-orange-600", key: previewData.analytics.products }
                            ].map((stat, i) => (
                                                              <motion.div 
                                  key={i}
                                  className={`${stat.bgColor} rounded-xl p-3 text-center`}
                                  whileHover={{ scale: 1.05 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <motion.p 
                                    key={stat.key}
                                    className={`text-2xl font-bold ${stat.textColor} overflow-hidden`}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      {stat.value}
                                    </motion.div>
                                  </motion.p>
                                  <p className="text-xs text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.visual === "scaling" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <motion.div 
                              className="flex items-center gap-2"
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <motion.div
                                className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-white text-xs">🚀</span>
                              </motion.div>
                              <h4 className="text-lg font-semibold text-gray-900">Business Scaling</h4>
                            </motion.div>
                            <motion.span 
                              className="text-sm text-orange-600 font-semibold"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Active
                            </motion.span>
                          </div>
                          <div className="space-y-3">
                            {previewData.scaling.map((platform, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div 
                                  className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                >
                                  <span className="text-white text-xs">🌐</span>
                                </motion.div>
                                <div className="flex-1">
                                  <p className="font-semibold text-gray-900">{platform.platform}</p>
                                  <p className="text-sm text-gray-600">
                                    {platform.growth > 30 ? "Growing" : platform.growth > 15 ? "Stable" : "Expanding"}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <motion.p 
                                    key={platform.growth}
                                    className="font-bold text-orange-600 overflow-hidden"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      initial={{ y: 0 }}
                                      animate={{ y: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      +{platform.growth}%
                                    </motion.div>
                                  </motion.p>
                                  <p className="text-xs text-gray-500">Revenue</p>
                                </div>
                              </motion.div>
                            ))}
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
      </Container>
    </section>
  );
} 