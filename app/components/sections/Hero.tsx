'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fadeInUp, staggerContainer } from '../animations';
import { useRouter } from 'next/navigation';

const metrics = [
  { value: 2601369, label: 'Operated', prefix: '+', suffix: '€' },
  { value: 6622, label: 'Reservations' },
  { value: 55492, label: 'Consumers' },
  { value: 36, label: 'Business performance', prefix: '+', suffix: '%' },
];

const features = [
  'business', 'billing', 'bookings', 'tickets', 'workdays', 'stock', 'performance', 'PRs', 'KPIs'
];

const insights = [
  'AI-powered insights', 'Real-time analytics', '24/7 support'
];

export default function Hero() {
  const router = useRouter();
  const [currentWord, setCurrentWord] = useState(0);
  const [email, setEmail] = useState('');
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    const storedEmail = localStorage.getItem('contactEmail');
    if (storedEmail) setEmail(storedEmail);

    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % features.length);
    }, 2500);

    const intervals = metrics.map((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(intervals[index]);
        }
        setCounts(prev => {
          const updatedCounts = [...prev];
          updatedCounts[index] = current;
          return updatedCounts;
        });
      }, duration / steps);
    });

    return () => {
      clearInterval(wordInterval);
      intervals.forEach(clearInterval);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('contactEmail', email);
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  const formatMetricValue = (value: number, index: number) => {
    const metric = metrics[index];
    return `${metric.prefix || ''}${Math.round(value).toLocaleString()}${metric.suffix || ''}`;
  };

  return (
    <section className="flex-1 h-screen w-full flex items-center justify-center py-16 px-4 overflow-hidden">
      <div className="flex flex-col flex-1 h-full max-w-7xl mx-auto w-full justify-between">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col flex-1 h-full items-center text-center justify-evenly"
        >
          <motion.div variants={fadeInUp} className="inline-flext">
            <span className="hero-badge">
              <Sparkles className="w-4 h-4 mr-2" />
              For nightlife, by nightlife
            </span>
          </motion.div>

          <div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold"
            >
              One platform to manage your<br />
              <span className="inline-block overflow-hidden align-bottom h-[70px] md:h-[90px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={features[currentWord]}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="gradient-text inline-block"
                  >
                    {features[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="section-subtitle"
            >
              Get complete control of your business quickly, easily, and specifically with our all-in-one platform.
            </motion.p>
          </div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleEmailSubmit}
            className="mx-auto w-96"
          >
            <div className="relative group">
              <div className="absolute left-4 top-1/2 text-[hsl(264,60%,60%)]">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-4 pr-16 py-3 rounded-xl glass-card bg-[hsla(264,60%,40%,0.1)] focus:outline-none focus:ring-2 focus:ring-[hsl(264,60%,40%)] transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl bg-[hsl(264,60%,50%)] text-white hover:bg-[hsl(264,60%,45%)] transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.form>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            {insights.map((insight, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-gray-400 text-sm">{insight}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-[0.25] grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              className="inline-flex flex-col items-center justify-center cursor-default"
            >
              <span className="stats-highlight text-3xl font-semibold">
                {formatMetricValue(counts[index], index)}
              </span>
              <span className="text-gray-500">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
