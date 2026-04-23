import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  antigravity?: boolean;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', antigravity = false }: FadeInProps) => {
  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: antigravity ? 0.95 : 1,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <motion.div
        animate={antigravity ? {
          y: [0, -10, 0],
        } : {}}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
