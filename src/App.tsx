import { MdFullscreen } from 'react-icons/md'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Box, Text } from '@chakra-ui/react';
import Countdown from 'react-countdown';
import Renderer from './components/CountDownYear';
import './index.css'

function App() {

  const date = new Date()
  const currentYear = date.getFullYear()
  const currentDay = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})
  const onHandleFull = useFullScreenHandle();

  const onHandleWaitNextYear = () => {
    localStorage.setItem('newYear', JSON.stringify(currentYear + 1))
  }

  return (
    <Box position='relative' fontFamily='Poppins'>
      <MdFullscreen className='full-screen-float-button' onClick={onHandleFull.enter}/>
      <FullScreen handle={onHandleFull} className='full-screen-toogle'>
        {currentDay === 'Dec 31' || currentDay === 'Jan 1' ? 
          <Countdown
            date={new Date(`Jan 1, 2024 00:00:00`)}
            renderer={Renderer}
            onComplete={onHandleWaitNextYear}
          /> : 
          <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Text fontSize='150' color='whiteAlpha.700' fontWeight='bold'>{currentYear}</Text>
          </Box>
        }
      </FullScreen>
    </Box>
  )
}

export default App
