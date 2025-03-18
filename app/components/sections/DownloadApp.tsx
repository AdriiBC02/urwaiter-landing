'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Smartphone } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations';
import Image from 'next/image';

const features = [
  "Real-time venue analytics",
  "Staff management on the go",
  "Instant booking notifications",
  "Mobile payment processing",
  "Customer feedback management",
  "Inventory tracking"
];

export default function DownloadApp() {
  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          id="download"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text & Features Section */}
          <motion.div variants={fadeInUp}>
            <span className="hero-badge inline-flex items-center mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile App
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Manage Your Venue<br />
              <span className="gradient-text">From Your Pocket</span>
            </h2>
            <p className="section-subtitle mb-12">
              Stay connected with your venue wherever you go.
              Access analytics, manage operations, and respond instantly through the UrWaiter mobile app.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-[hsl(269.8,70%,55%)]/10 hover:bg-[hsl(269.8,70%,55%)]/20 p-4 rounded-xl transition-colors"
                  whileHover={{ scale: 1.03 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[hsl(269.8,70%,65%)] flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <motion.a
                href="#"
                className="app-store-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={50}
                />
              </motion.a>
              <motion.a
                href="#"
                className="app-store-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={190}
                  height={58}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Mobile Device Image */}
          <motion.div variants={fadeInUp} className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(269.8,70%,55%)]/20 to-transparent rounded-[3rem] blur-3xl"></div>
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(269.8,70%,60%)] to-[hsl(269.8,70%,40%)] rounded-[3rem] blur-xl opacity-75"></div>
              <div className="relative aspect-[9/16] rounded-[3rem] border-[10px] border-[hsl(269.8,70%,55%)]/20 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400"
                  alt="UrWaiter Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
