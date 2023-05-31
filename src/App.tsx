import { Suspense, lazy } from 'react';
import { MdFullscreen } from 'react-icons/md'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Box, CircularProgress, Text } from '@chakra-ui/react';
import './index.css'

const CountDownComponent = lazy(() => import('./components/CountDownYear'))

function App() {

  const date = new Date()
  const currentYear = date.getFullYear()
  const onHandleFull = useFullScreenHandle();
  const currentDay = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})

  return (
    <Box position='relative' fontFamily='Poppins'>
      <MdFullscreen className='full-screen-float-button' onClick={onHandleFull.enter}/>
      <FullScreen handle={onHandleFull} className='full-screen-toogle'>
          { currentDay === 'Dec 31' && (
            <Suspense fallback={<CircularProgress isIndeterminate color='white' />}>
              <CountDownComponent/>
            </Suspense>
          )}
          { currentDay !== 'Dec 31' && (
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <Text fontSize='150' color='whiteAlpha.700' fontWeight='bold'>{currentYear}</Text>
            </Box>
          )}
      </FullScreen>
    </Box>
  )
}

export default App
