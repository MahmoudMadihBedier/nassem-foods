import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const FloatingElement = ({ children, speed = 0.5, className = "" }: FloatingElementProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], [0, speed * 1000]);

  return (
    <motion.div style={{ y }} className={`pointer-events-none ${className}`}>
      {children}
    </motion.div>
  );
};
