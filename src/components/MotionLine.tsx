import { motion } from 'framer-motion';
import { animateSlideDown, animateSlideUp } from '../helpers';

interface MotionLineProps {
  color: 'emerald-300' | 'stone-900' | 'orange-400' | 'red-400' | 'indigo-400',
  h: string,
  w: string,
  position: string,
  transitionX: any,
  transitionY: any,
  slideUp?: boolean,
  slideDown?: boolean 
}

const initRotate = { rotate: 45 }

const MotionLine = (props: MotionLineProps) => {
  return (
    <motion.div
      className={`absolute rounded-3xl z-10
        bg-${props.color} 
        w-${props.w} h-${props.h}
        ${props.position}
      `}
      initial={initRotate}
      transition={{
        y: props.transitionY,
        x: props.transitionX,
      }}
      animate={props.slideDown 
        ? animateSlideDown 
        : props.slideUp && animateSlideUp} 
    ></motion.div>
  );
}

export default MotionLine;