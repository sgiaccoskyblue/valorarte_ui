import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideInAnimation: FC<{
  initialXValue: number;
  delay: number;
}> = ({ children, initialXValue = -500, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: initialXValue, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div ref={ref} initial='hidden' animate={controls} variants={boxVariants}>
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
