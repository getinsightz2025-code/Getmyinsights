import { NextResponse } from 'next/server';

// Mock data for MVP - replace with real database queries later
const mockTrendingProducts = [
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

const mockPriceAlerts = [
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

const mockMarketStats = [
  {
    title: "Total Products Tracked",
    value: "1,247",
    change: "+12%",
    icon: "Eye",
    color: "blue"
  },
  {
    title: "Trending Products",
    value: "23",
    change: "+5",
    icon: "TrendingUp",
    color: "green"
  },
  {
    title: "Price Drops Today",
    value: "8",
    change: "+2",
    icon: "DollarSign",
    color: "red"
  },
  {
    title: "Avg. Trend Score",
    value: "78.5",
    change: "+3.2",
    icon: "BarChart3",
    color: "purple"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: {
        trendingProducts: mockTrendingProducts,
        priceAlerts: mockPriceAlerts,
        marketStats: mockMarketStats,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
} 