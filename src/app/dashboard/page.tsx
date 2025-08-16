'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Eye, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  BarChart3,
  Users,
  Globe,
  Zap,
  Bell,
  Settings,
  Search
} from 'lucide-react';

export default function Dashboard() {
  // Mock data for MVP - replace with real data later
  const trendingProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      image: "https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=🎧",
      currentPrice: 29.99,
      previousPrice: 45.99,
      priceChange: -34.8,
      views: 15420,
      viewsChange: 1247,
      trendScore: 87,
      category: "Electronics",
      supplier: "Temu",
      status: "trending"
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      image: "https://via.placeholder.com/80x80/10B981/FFFFFF?text=⌚",
      currentPrice: 89.99,
      previousPrice: 89.99,
      priceChange: 0,
      views: 8920,
      viewsChange: 567,
      trendScore: 72,
      category: "Electronics",
      supplier: "Temu",
      status: "rising"
    },
    {
      id: 3,
      name: "Portable Charger 20000mAh",
      image: "https://via.placeholder.com/80x80/F59E0B/FFFFFF?text=🔋",
      currentPrice: 19.99,
      previousPrice: 25.99,
      priceChange: -23.1,
      views: 12340,
      viewsChange: 892,
      trendScore: 91,
      category: "Electronics",
      supplier: "Temu",
      status: "hot"
    },
    {
      id: 4,
      name: "Bluetooth Speaker Mini",
      image: "https://via.placeholder.com/80x80/8B5CF6/FFFFFF?text=🔊",
      currentPrice: 15.99,
      previousPrice: 15.99,
      priceChange: 0,
      views: 6780,
      viewsChange: 234,
      trendScore: 65,
      category: "Electronics",
      supplier: "Temu",
      status: "stable"
    }
  ];

  const priceAlerts = [
    {
      id: 1,
      product: "Wireless Earbuds Pro",
      oldPrice: 45.99,
      newPrice: 29.99,
      change: -34.8,
      time: "2 hours ago",
      type: "drop"
    },
    {
      id: 2,
      product: "Portable Charger 20000mAh",
      oldPrice: 25.99,
      newPrice: 19.99,
      change: -23.1,
      time: "5 hours ago",
      type: "drop"
    }
  ];

  const marketStats = [
    {
      title: "Total Products Tracked",
      value: "1,247",
      change: "+12%",
      icon: Eye,
      color: "blue"
    },
    {
      title: "Trending Products",
      value: "23",
      change: "+5",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Price Drops Today",
      value: "8",
      change: "+2",
      icon: DollarSign,
      color: "red"
    },
    {
      title: "Avg. Trend Score",
      value: "78.5",
      change: "+3.2",
      icon: BarChart3,
      color: "purple"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'trending': return 'bg-red-100 text-red-700';
      case 'hot': return 'bg-orange-100 text-orange-700';
      case 'rising': return 'bg-green-100 text-green-700';
      case 'stable': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'trending': return <Zap className="w-3 h-3" />;
      case 'hot': return <AlertTriangle className="w-3 h-3" />;
      case 'rising': return <TrendingUp className="w-3 h-3" />;
      case 'stable': return <CheckCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">GetInsightZ Dashboard</h1>
              <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Live Data
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Trending Products</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                    View All
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {trendingProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900">{product.name}</h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                            {getStatusIcon(product.status)}
                            <span className="ml-1 capitalize">{product.status}</span>
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{product.category} • {product.supplier}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{product.views.toLocaleString()}</span>
                            <span className="text-green-600">(+{product.viewsChange})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BarChart3 className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Score: {product.trendScore}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg font-semibold text-gray-900">${product.currentPrice}</span>
                          {product.priceChange !== 0 && (
                            <span className={`text-sm ${product.priceChange < 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {product.priceChange > 0 ? '+' : ''}{product.priceChange.toFixed(1)}%
                            </span>
                          )}
                        </div>
                        {product.previousPrice !== product.currentPrice && (
                          <p className="text-sm text-gray-500 line-through">${product.previousPrice}</p>
                        )}
                        <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          Track
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Price Alerts & Quick Actions */}
          <div className="space-y-6">
            {/* Price Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Price Alerts</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {priceAlerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100"
                    >
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{alert.product}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-500 line-through">${alert.oldPrice}</span>
                          <span className="text-sm font-semibold text-green-600">${alert.newPrice}</span>
                          <span className="text-xs text-green-600">({alert.change.toFixed(1)}%)</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                      <button className="text-red-600 hover:text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Search className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Search Products</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Bell className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Set Price Alerts</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">View Analytics</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Globe className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Market Overview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 