'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations';

const testimonials = [
  {
    quote: "UrWaiter is the tool perfectly adapted to nightlife, being able to control both booths and bars, box office... In this way, total control is achieved at the moment and you can manage a nightclub from anywhere.",
    name: "Alberto Muñoz",
    role: "CEO - Jowke Club",
    avatar: "https://i.pravatar.cc/100?img=10"
  },
  {
    quote: "For us, the integration of UrWaiter into Jowke has been essential to streamline processes, product stock and reservation management. It is a platform tailor-made for any nightclub and nightlife in general. Its use and integration are very simple, with different roles depending on the position, and having the CRM, bar management, lockers, booths, hookahs, wardrobe... integrated into a single platform, everything is faster and easier to manage.",
    name: "Rafa Muñoz",
    role: "CEO - Jowke Club",
    avatar: "https://i.pravatar.cc/100?img=12"
  }
];

export default function Testimonials() {
  return (
    <motion.section
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our clients are our <span className="gradient-text">business card</span>
          </h2>
          <p className="section-subtitle">
            Read our customer reviews and understand why we are key in the process of taking your business to the top.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        >
          <div className="inline-flex gap-8 px-2 pb-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="testimonial-card min-w-[320px] max-w-[500px] flex-shrink-0 bg-[hsl(264,60%,40%)]/5 rounded-xl p-6 border border-[hsl(264,60%,50%)]/10 backdrop-blur"
              >
                <p className="flex flex-1 text-lg leading-relaxed mb-8 text-gray-300">
                  {testimonial.quote}
                </p>
                <div className="border-t border-[hsl(269.80,60%,48.04%)]/10 pt-6 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-[hsl(269.80,60%,48.04%)]/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
