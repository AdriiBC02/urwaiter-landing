'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone, Loader2, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    professionalType: '',
    message: ''
  });

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', professionalType: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'hsl(264,30%,5%)',
            color: '#fff',
            border: '1px solid hsl(269.8,70%,55%)',
            boxShadow: '0 10px 20px rgba(120,60,240,0.2)',
            borderRadius: '12px',
            padding: '16px 20px',
          },
          success: {
            iconTheme: {
              primary: 'hsl(120,70%,50%)',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: 'hsl(0,70%,50%)',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Let&apos;s Connect
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold mb-6">Reach Out to Us</h2>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-4">
                    <Mail className="icon-gradient w-6 h-6" />
                    <p>info@urwaiter.io</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="icon-gradient w-6 h-6" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="icon-gradient w-6 h-6" />
                    <p>123 Business Street, Suite 100<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-card bg-transparent focus:ring-2 focus:ring-[hsl(269.8,70%,55%)]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-card bg-transparent focus:ring-2 focus:ring-[hsl(269.8,70%,55%)]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-card bg-transparent focus:ring-2 focus:ring-[hsl(269.8,70%,55%)]"
                    placeholder="+1 (555) 987-6543"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Professional Type</label>
                  <div className="relative">
                    <select
                      name="professionalType"
                      value={formData.professionalType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 glass-card bg-transparent appearance-none focus:ring-2 focus:ring-[hsl(269.8,70%,55%)]"
                    >
                      <option value="">Select your business type</option>
                      <option>Nightclub</option>
                      <option>Beach Club</option>
                      <option>Pub</option>
                      <option>Event Promoter</option>
                      <option>Festival</option>
                      <option>Restaurant</option>
                      <option>Other</option>
                    </select>
                    <Briefcase className="absolute top-1/2 right-3 -translate-y-1/2 text-[hsl(269.8,70%,55%)] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-card bg-transparent focus:ring-2 focus:ring-[hsl(269.8,70%,55%)] min-h-[120px]"
                    placeholder="How can we assist you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
