import Countdown, { zeroPad } from 'react-countdown';
import Cookies from 'js-cookie';

const Renderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: unknown}) => {

  if (completed) {
    Cookies.set('recycle', JSON.stringify(true), { expires: new Date(import.meta.env.VITE_CONFETTI_END)})
    Cookies.set('run', JSON.stringify(true), { expires: new Date(import.meta.env.VITE_CONFETTI_END)})
    window.location.reload();
  }

  if (seconds <= 10 && hours === 0 && minutes === 0) {
    return (
      <h1 className="font-bold text-[11rem] text-center text-slate-100 animate-ping">{seconds}</h1>
    )
  }

  return (
    <h1 className="font-bold text-8xl text-center text-slate-100">{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</h1>
  )
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