import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  BarChart3, 
  Search, 
  MessageSquare, 
  LayoutDashboard, 
  Globe, 
  Users
} from 'lucide-react';
import { Feature, Testimonial, FAQ } from './types';

export const FEATURES: Feature[] = [
  {
    icon: TrendingUp,
    title: "Product Trend Discovery",
    description: "Temu-specific early alerts on trending products before they go viral."
  },
  {
    icon: DollarSign,
    title: "Pricing Intelligence",
    description: "Track price changes, identify optimal pricing strategies, and maximize margins."
  },
  {
    icon: Package,
    title: "Inventory & Supply Chain Alerts",
    description: "Monitor stock levels, shipping times, and supply chain disruptions."
  },
  {
    icon: BarChart3,
    title: "Sales & Market Insights",
    description: "Comprehensive analytics on market performance and sales opportunities."
  },
  {
    icon: Search,
    title: "Keyword & Listing Optimization",
    description: "Optimize your listings with data-driven keyword insights and trends."
  },
  {
    icon: MessageSquare,
    title: "Customer Sentiment & Review Analysis",
    description: "Understand customer feedback and sentiment to improve your products."
  },
  {
    icon: LayoutDashboard,
    title: "Personalized Dashboard & Reports",
    description: "Custom dashboards with real-time data and actionable insights."
  },
  {
    icon: Globe,
    title: "Multi-Platform Scaling",
    description: "Scale your business across multiple marketplaces with unified insights."
  },
  {
    icon: Users,
    title: "Influencer & Social Media Tracking",
    description: "Track trending products and influencers driving sales."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "E-commerce Entrepreneur",
    content: "GetInsightZ helped me spot the next big trend 3 weeks before my competitors. My sales increased by 40%!",
    avatar: "SC",
    company: "TrendSpotter Co."
  },
  {
    name: "Marcus Rodriguez",
    role: "Dropshipping Expert",
    content: "The pricing intelligence feature alone saved me $15,000 in lost margins. Game changer!",
    avatar: "MR",
    company: "Global Dropship"
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    content: "Real-time alerts mean I can act fast when opportunities arise. My response time improved by 60%.",
    avatar: "LT",
    company: "MarketMasters"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How do you get the data?",
    answer: "We use advanced algorithms to analyze public data from marketplaces, social media, and web sources. Our proprietary technology identifies patterns and trends in real-time."
  },
  {
    question: "Do I need to connect my store?",
    answer: "No. GetInsightZ is 100% standalone. You don't need to connect any accounts or give us access to your store data."
  },
  {
    question: "Can I track other platforms?",
    answer: "Yes! We're starting with Temu and expanding to other major marketplaces soon. You'll get early access to new platform integrations."
  }
];

export const NAVIGATION_LINKS = [
  { href: "#why-getinsightz", label: "Why GetInsightZ" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Market Reality" },
  { href: "#faq", label: "FAQ" }
];

export const FOOTER_LINKS = {
  product: [
    { href: "#", label: "Features" },
    { href: "#", label: "API" },
    { href: "#", label: "Integrations" }
  ],
  company: [
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Contact" }
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" }
  ]
}; 