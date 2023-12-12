import Countdown, { zeroPad } from 'react-countdown';
import FireworksMoment from './FireworksMoment';
import { currentDay } from '../helpers';

const Renderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: unknown}) => {

  if (completed) {
    return (
        <aside className='flex h-screen w-full items-center text-white justify-center gap-4 font-bold text-9xl'>
          <h1 >{import.meta.env.VITE_NEW_YEAR}</h1>
          <FireworksMoment/>
          <video src="../assets/videos/confetti.mp4" autoPlay muted loop></video>
        </aside>
    );
  }

  if (seconds <= 10 && hours === 0 && minutes === 0) {
    return (
      <aside className='flex h-screen w-full items-center text-white justify-center gap-4 font-bold text-9xl animate-pulse'>
        <h1>{seconds}</h1>
        <video src="../assets/videos/christmas.mp4" autoPlay muted loop></video>
      </aside>
    )
  }

  if (currentDay === 'Dec 31') {
    return (
      <aside className='flex h-screen w-full items-center text-white justify-center gap-4 font-bold text-7xl'>
        <h1>{zeroPad(hours)}</h1>
        <label>:</label>
        <h1>{zeroPad(minutes)}</h1>
        <label>:</label>
        <h1>{zeroPad(seconds)}</h1>
        <video src="../assets/videos/loading.mp4" autoPlay muted loop></video>
      </aside> 
    )
  }
};

const CountDownComponent = () => {
  return ( 
    <Countdown
    date={new Date(`Jan 01, ${import.meta.env.VITE_NEW_YEAR} 00:00:00`)}
    renderer={Renderer}
  /> 
  );
}

export default CountDownComponent;