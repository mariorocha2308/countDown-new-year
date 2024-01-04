import Confetti from 'react-confetti'
import { currentDay } from '../helpers';
import Cookies from 'js-cookie';

const ConfettiRain = () => {
  const recycleCookie: boolean = JSON.parse(Cookies.get('recycle') ?? 'null')
  const runCookie: boolean = JSON.parse(Cookies.get('run') ?? 'null')
  
  return (
    <Confetti className='w-screen h-screen z-10'
      gravity={
        currentDay === 'Jan 1' ? 0.1 :
        currentDay === 'Jan 2' ? 0.05 : 0.01
      }
      recycle={recycleCookie ?? false}
      run={runCookie ?? false}
    />
  )
}

export default ConfettiRain;