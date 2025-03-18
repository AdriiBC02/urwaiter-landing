'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { fadeInUp, staggerContainer, scaleIn } from '../animations';

const solutions = [
  {
    title: "POS System",
    description: "A fully adapted, intuitive POS system to manage your nightlife business effectively.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/pos&bg=264,60%,15%"
  },
  {
    title: "Stock Manager",
    description: "Automate inventory, minimize manual tasks, and reduce human errors seamlessly.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/stock&bg=264,60%,15%"
  },
  {
    title: "Online Menu",
    description: "Interactive, customizable menus enabling quick, efficient orders from customer devices.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/menu&bg=264,60%,15%"
  },
  {
    title: "CRM + ERP",
    description: "Instant analytics and insights to track and improve your venue's performance.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/crm&bg=264,60%,15%"
  },
  {
    title: "Embedded Chat",
    description: "Secure internal communication with fully encrypted, built-in chat functionality.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/chat&bg=264,60%,15%"
  },
  {
    title: "Digital Day Record",
    description: "Digital employee tracking and scheduling to ensure accurate management and reporting.",
    image: "https://shots.so/mock/iphone-15-pro?url=https://urwaiter.io/workday&bg=264,60%,15%"
  }
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicateCount, setDuplicateCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const scrollEnd = scrollWidth - clientWidth;

      if (scrollLeft >= scrollEnd * 0.7) {
        setDuplicateCount(prev => prev + 2); // Load more items faster
      }
    };

    const containerEl = containerRef.current;
    containerEl?.addEventListener('scroll', handleScroll);
    return () => containerEl?.removeEventListener('scroll', handleScroll);
  }, []);

  const items = Array(duplicateCount).fill(solutions).flat();

  return (
    <motion.section
      id="solutions"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="hero-badge inline-flex items-center mb-6">
            <Target className="w-4 h-4 mr-2" />
            Integrated Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unified Tools for <span className="gradient-text">Maximum Efficiency</span>
          </h2>
          <p className="section-subtitle">
            Streamline your operations with our carefully crafted suite of integrated digital solutions.
          </p>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 pb-6 pt-4"
      >
        <div className="inline-flex gap-8 min-w-max items-center">
          {items.map((solution, index) => (
            <motion.div
              key={`${solution.title}-${index}`}
              variants={scaleIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % solutions.length) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="w-[300px] flex-shrink-0 rounded-2xl overflow-hidden backdrop-blur-xl bg-[hsl(269.8,70%,55%)]/5 border border-[hsl(269.8,70%,55%)]/10 hover:bg-[hsl(269.8,70%,55%)]/10 transition-all duration-300 shadow-sm"
            >
              <div className="h-[520px] overflow-hidden bg-transparent p-4">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-transparent border-t border-[hsl(269.8,70%,55%)]/10">
                <h3 className="text-lg font-semibold mb-2 text-white">{solution.title}</h3>
                <p className="text-gray-400 text-sm">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
