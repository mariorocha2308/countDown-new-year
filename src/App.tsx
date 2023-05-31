import { MdFullscreen } from 'react-icons/md'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Countdown from 'react-countdown';
import Renderer from './components/CountDownYear';
import { Box } from '@chakra-ui/react';
import './index.css'

function App() {

  const date = new Date()
  const currentYear = date.getFullYear()
  const onHandleFull = useFullScreenHandle();

  return (
    <Box position='relative' fontFamily='Poppins'>
      <MdFullscreen className='full-screen-float-button' onClick={onHandleFull.enter}/>
      <FullScreen handle={onHandleFull} className='full-screen-toogle'>
        <Countdown
          date={new Date(`Jan 1, ${currentYear + 1} 00:00:00`)}
          renderer={Renderer}
        />
      </FullScreen>
    </Box>
  )
}

export default App
