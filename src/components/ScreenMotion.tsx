import { lazy, Suspense } from "react";
import { currentDay, currentMonth, transition1, transition2, transition3 } from "../helpers";
import TextInto from "./TextInto";
import MotionLine from "./MotionLine";

const ConfettiRain = lazy(() => import('./ConfettiRain'))
const CountDown = lazy(() => import('./CountDown'))

const ScreenMotion = () => {
  return (  
    <section className="grid h-screen w-full place-items-center relative">
      <div className="absolute w-0 h-0 top-0 left-0
      border-r-[0px] border-r-transparent
      border-t-[0px] border-t-transparent
      border-l-[150px] border-l-stone-900
      border-b-[150px] border-b-transparent"></div>

      <div className="grid place-items-center text-neutral-50 bg-slate-950 h-[35rem] w-[35rem] 
      rounded-full shadow-[-30px_30px_70px_-5px_rgba(0,0,0,0.3)] shadow-stone-900">
        {currentDay !== 'Dec 31' && <TextInto/>}
        {currentDay === 'Dec 31' && (
          <Suspense>
            <CountDown/>
          </Suspense>
        )}
      </div>
      {currentMonth !== 0 && (
        <Suspense>
          <ConfettiRain/> 
        </Suspense>
      )}

      <MotionLine color="indigo-400" h="32" w="10" position="-bottom-10 right-24" slideUp
        transitionX={transition1} transitionY={transition1}/>

      <div className="absolute w-0 h-0 bottom-0 right-0
      border-t-[0px] border-t-transparent
      border-r-[0px] border-r-transparent
      border-b-[180px] border-b-stone-900
      border-l-[180px] border-l-transparent"></div>
    </section>
  );
}

export default ScreenMotion;