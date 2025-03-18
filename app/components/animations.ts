import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-50px" }
};

export const staggerContainer: Variants = {
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, margin: "-50px" }
};