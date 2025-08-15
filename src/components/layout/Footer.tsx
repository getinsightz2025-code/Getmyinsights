import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GetInsightZ
            </div>
          </div>
          
          {/* Simple Description */}
          <p className="text-gray-400 mb-8 max-w-md text-sm">
            Real-time market intelligence for online sellers. Spot trends, track competitors, and scale your business.
          </p>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 w-full">
            <p className="text-gray-400 text-sm">
              © 2024 GetInsightZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 