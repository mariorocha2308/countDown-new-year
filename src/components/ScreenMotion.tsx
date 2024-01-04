import { lazy, Suspense } from "react";
// import { motion } from "framer-motion"
const ConfettiRain = lazy(() => import('./ConfettiRain'))
import TextInto from "./TextInto";

// const initRotate = { rotate: 45 }

// const transition1 = {
//   duration: 4,
//   repeatType: "reverse",
//   repeat: Infinity,
//   easeIn: [0.17, 0.67, 0.83, 0.67],
// };

// const transition2 = {
//   repeatType: "reverse",
//   repeat: Infinity,
//   delay: 1,
//   type: "spring", stiffness: 20
// };

// const transition3 = {
//   repeatType: "reverse",
//   repeat: Infinity,
//   duration: 13,
//   type: "tween"
// };

// const animatesDown = {
//   y: ["4rem", "0rem"],
//   x: ["0rem", "4rem"],
// }

// const animatesUp = {
//   y: ["0rem", "4rem"],
//   x: ["4rem", "0rem"],
// }

const ScreenMotion = () => {

  return (  
    <section className="grid h-screen w-full place-items-center relative">
      <div className="absolute w-0 h-0 top-0 left-0
      border-r-[0px] border-r-transparent
      border-t-[0px] border-t-transparent
      border-l-[150px] border-l-stone-900
      border-b-[150px] border-b-transparent"></div>

      {/* <motion.div initial={initialRotate} transition={transitions} animate={animatesDown} 
      className="absolute w-9 h-32 top-10 left-10 bg-emerald-300 rounded-3xl z-10"></motion.div>
      <motion.div initial={initialRotate} transition={transitions} animate={animatesUp} 
      className="absolute w-9 h-32 top-16 left-16 bg-stone-900 rounded-3xl z-10"></motion.div>
      <motion.div initial={initialRotate} transition={transitions} animate={animatesDown} 
      className="absolute w-9 h-32 top-20 left-20 bg-orange-400 rounded-3xl z-10"></motion.div>
      <motion.div initial={initialRotate} transition={transitions} animate={animatesUp} 
      className="absolute w-9 h-32 top-28 left-28 bg-red-400 rounded-3xl z-10"></motion.div>
      <motion.div initial={initialRotate} transition={transitions} animate={animatesDown} 
      className="absolute w-9 h-32 top-36 left-36 bg-indigo-400 rounded-3xl z-10"></motion.div> 
      <motion.div initial={initialRotate} transition={transitions} animate={animatesDown} 
      className="absolute w-9 h-32 top-36 left-36 bg-indigo-400 rounded-3xl z-10"></motion.div> 
      <motion.div initial={initialRotate} transition={transitions} animate={animatesDown} 
      className="absolute w-9 h-32 top-36 left-36 bg-indigo-400 rounded-3xl z-10"></motion.div> */}

      <div className="grid place-items-center text-neutral-50 bg-slate-950 h-[35rem] w-[35rem] 
      rounded-full shadow-[-30px_30px_70px_-5px_rgba(0,0,0,0.3)] shadow-stone-900">
        <TextInto/>
      </div>
      <Suspense>
        <ConfettiRain/> 
      </Suspense>

      {/* <motion.div initial={initRotate} transition={{
        y: transition3,
        x: transition3,
      }} animate={animatesUp} 
      className="absolute w-9 h-9 bottom-16 right-52 bg-emerald-300 rounded-3xl z-10"></motion.div>
      <motion.div initial={initRotate} transition={{
        y: transition1,
        x: transition1,
      }} animate={animatesDown} 
      className="absolute w-5 h-64 bottom-24 right-16 bg-stone-900 rounded-3xl z-10"></motion.div>
      <motion.div initial={initRotate} transition={{
        y: transition2,
        x: transition2,
      }} animate={animatesDown} 
      className="absolute w-8 h-32 bottom-14 right-10 bg-orange-400 rounded-3xl z-10"></motion.div>
      <motion.div initial={initRotate} transition={{
        y: transition1,
        x: transition1,
      }} animate={animatesUp} 
      className="absolute w-10 h-32 -bottom-10 right-24 bg-indigo-400 rounded-3xl z-10"></motion.div> */}

      <div className="absolute w-0 h-0 bottom-0 right-0
      border-t-[0px] border-t-transparent
      border-r-[0px] border-r-transparent
      border-b-[180px] border-b-stone-900
      border-l-[180px] border-l-transparent"></div>
    </section>
  );
}

export default ScreenMotion;