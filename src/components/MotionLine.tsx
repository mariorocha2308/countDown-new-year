import { motion } from 'framer-motion';
import { animateSlideDown, animateSlideUp } from '../helpers';

interface MotionLineProps {
  className: string
  transitionX: any,
  transitionY: any,
  slideUp?: boolean,
  slideDown?: boolean 
}

const initRotate = { rotate: 45 }

const MotionLine = (props: MotionLineProps) => {
  return (
    <motion.div
      className={props.className}
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