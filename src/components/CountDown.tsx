import Countdown, { zeroPad } from 'react-countdown';
import { currentDay } from '../helpers';

const Renderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: unknown}) => {

  if (completed) {
  }

  if (seconds <= 10 && hours === 0 && minutes === 0) {
    return (
      <aside className='flex h-screen w-full items-center text-white justify-center gap-4 font-bold text-9xl animate-ping'>
        <h1>{seconds}</h1>
      </aside>
    )
  }

  if (currentDay === 'Dec 31') {
    return (
      <aside className='flex h-screen w-full items-center text-white justify-center gap-4 font-bold text-7xl'>
        <h1>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</h1>
      </aside> 
    )
  }
};

const CountDown = () => {
  return ( 
    <Countdown
    date={new Date(`Jan 1, ${import.meta.env.VITE_NEW_YEAR} 00:00:00`)}
    renderer={Renderer}
  /> 
  );
}

export default CountDown;