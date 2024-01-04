import Confetti from 'react-confetti'
import { currentDay } from '../helpers';

const ConfettiRain = () => {
  
  return (
    <Confetti className='w-screen h-screen z-10'
      gravity={
        currentDay === 'Jan 1' ? 0.1 :
        currentDay === 'Jan 2' ? 0.05 : 0.02
      }
    />
  )
}

export default ConfettiRain;