import { currentDay, currentMonth, currentYear } from "../helpers";

const TextInto = () => {
  return (  
    <h1 className={`font-bold text-[11rem] text-center text-slate-100 
    ${currentMonth === 11 && currentDay !== 'Dec 31' && 'animate-pulse'}
    `}>{currentYear}</h1>
  );
}

export default TextInto;