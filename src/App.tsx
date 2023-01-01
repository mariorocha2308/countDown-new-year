import { MdFullscreen } from 'react-icons/md'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Box, Text } from '@chakra-ui/react';
import useLocalStorage from "use-local-storage";
import Countdown from 'react-countdown';
import Renderer from './components/CountDownYear';
import './index.css'

function App() {

  const newYear = new Date()
  const currentDay = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})
  const [year, setYear] = useLocalStorage("newYear", newYear.getFullYear());
  const onHandleFull = useFullScreenHandle();
  const onHandleWaitNextYear = () => {
    setTimeout(() => {
      setYear(newYear.getFullYear() + 1)
    }, 180000);
  }

  return (
    <Box position='relative'>
      <MdFullscreen className='full-screen-float-button' onClick={onHandleFull.enter}/>
      <FullScreen handle={onHandleFull} className='full-screen-toogle'>
        {currentDay === 'Jan 1' || currentDay === 'Jan 2' ? 
          <Countdown
            date={new Date(`Jan 2, 2023 00:00:00`)}
            renderer={Renderer}
            onComplete={onHandleWaitNextYear}
          /> : 
          <Box display='flex' justifyContent='center' alignItems='center' fontFamily='Poppins' flexDirection='column'>
            <Text fontSize='150' className="new-year" fontWeight='bold'>{newYear.getFullYear()}</Text>
          </Box>
        }
      </FullScreen>
    </Box>
  )
}

export default App
