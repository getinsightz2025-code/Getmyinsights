'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/Button';
import { WaitlistFormData } from '@/lib/types';

export function GetStarted() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: '',
    email: '',
    marketplace: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  // Get waitlist count on component mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/waitlist?action=count');
        const data = await response.json();
        if (data.success !== false) {
          setWaitlistCount(data.count || 0);
        }
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };

    fetchCount();
  }, []);

  const handleInputChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.marketplace) {
      setErrorMessage('Please select a marketplace');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'addEntry',
          data: formData
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        if (result.isExisting) {
          // User is already on the waitlist
          setSubmitStatus('success');
          setSuccessMessage('You\'re already on our waitlist! We\'ll notify you when your spot is ready.');
        } else {
          // New user added to waitlist
          setSubmitStatus('success');
          setSuccessMessage('Welcome to the waitlist! We\'ll notify you when your spot is ready.');
        }
        setFormData({ fullName: '', email: '', marketplace: 'amazon' });
      } else {
        setErrorMessage(result.error || 'Failed to join waitlist. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Priority Access",
      description: "Be among the first to access new features and updates"
    },
    {
      title: "Direct Feedback",
      description: "Shape the product with direct input to our development team"
    },
    {
      title: "Community Access",
      description: "Join our exclusive community of forward-thinking sellers"
    },
    {
      title: "Special Pricing",
      description: "Lock in early adopter pricing for life"
    }
  ];

  return (
    <section id="join-waitlist" className="py-20 bg-gray-50">
      <Container>
        {/* Headline & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the early access community and be among the first to experience smarter market intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Early Access Benefits
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Sign Up Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Join Early Access
              </h3>
              
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Welcome to the Waitlist!</h4>
                  <p className="text-gray-600 mb-6">
                    {successMessage || 'You\'ve successfully joined our early access community. We\'ll notify you as soon as we launch!'}
                  </p>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    variant="primary"
                    size="lg"
                  >
                    Join Another Email
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What marketplace do you sell on?
                    </label>
                    <select 
                      value={formData.marketplace}
                      onChange={(e) => handleInputChange('marketplace', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isSubmitting}
                    >
                      <option value="">Select marketplace</option>
                      <option value="Temu">Temu</option>
                      <option value="Amazon">Amazon</option>
                      <option value="eBay">eBay</option>
                      <option value="Shopify">Shopify</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-3"
                    >
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </motion.div>
                  )}
                  
                  <Button 
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </div>
                    ) : (
                      'Join Early Access'
                    )}
                  </Button>
                </form>
              )}
              
              <p className="text-sm text-gray-500 text-center mt-4">
                No credit card required • Join {waitlistCount}+ sellers already on the waitlist
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 