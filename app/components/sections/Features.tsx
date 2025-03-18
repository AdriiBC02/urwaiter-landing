'use client';

import { motion } from 'framer-motion';
import { LineChart, Users, BookCheck, Settings, Shield, Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../animations';

const features = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Flow Manager",
    description: "Tailor your workflows precisely to your business needs and automate processes seamlessly.",
    details: ["Customizable workflows", "Business rules engine", "Process automation", "Custom triggers"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Click & Pay",
    description: "Sell products instantly, reduce customer wait times, and streamline transactions effortlessly.",
    details: ["Instant payments", "Multiple payment methods", "Secure transactions", "Payment analytics"]
  },
  {
    icon: <BookCheck className="w-8 h-8" />,
    title: "Campaign Manager",
    description: "Craft targeted promotions and loyalty programs tailored to your customers’ preferences.",
    details: ["Custom promotions", "Loyalty programs", "Marketing automation", "Customer segmentation"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Stock & Inventory",
    description: "Automate your inventory management, eliminate manual errors, and stay ahead of stock demands.",
    details: ["Real-time tracking", "Automated reordering", "Inventory analytics", "Stock predictions"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ActionSphere",
    description: "Monitor every activity within your system in real-time for complete oversight and control.",
    details: ["Activity monitoring", "Real-time alerts", "Performance tracking", "Audit logs"]
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Physical & Online Payments",
    description: "Securely process transactions both physically and digitally, enhancing convenience for your clients.",
    details: ["Secure transactions", "Multiple payment methods", "Payment analytics", "Fraud detection"]
  }
];

export default function Features() {
  return (
    <motion.section
      id="features"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Enhanced Section Heading */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="hero-badge inline-flex items-center mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Main functionalities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Powerful <span className="gradient-text">All-in-One Platform</span>
          </h2>
          <p className="section-subtitle">
            Streamline your business operations with tools specifically designed for efficiency and growth.
          </p>
        </motion.div>

        {/* Improved Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="feature-card group flex flex-col h-full"
            >
              <div className="icon-gradient mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 flex-grow mb-6">
                {feature.description}
              </p>

              <div className="mt-auto grid gap-3">
                {feature.details.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[hsl(269.8,70%,55%)]/10 p-3 rounded-lg transition-colors hover:bg-[hsl(269.8,70%,55%)]/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[hsl(269.8,70%,65%)] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
