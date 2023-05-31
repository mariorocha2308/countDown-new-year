import { Suspense, lazy } from 'react';
import { Box, CircularProgress, Stack, Text } from '@chakra-ui/react'
import { zeroPad } from 'react-countdown';
import '../index.css'

const FireworksMoment = lazy(() => import('./FireworksMoment'))

const Renderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: unknown}) => {

  const newYear = new Date()
  const currentDay = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})

  if (currentDay !== 'Dec 31') {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Text fontSize='150' color='whiteAlpha.700' fontWeight='bold'>{newYear.getFullYear()}</Text>
      </Box>
    )
  }

  if (completed) {
    return (
      <Suspense fallback={<CircularProgress isIndeterminate color='white' />}>
        <Box display='flex' justifyContent='center' alignItems='center' fontFamily='Poppins'>
          <Text fontSize='150' color='whiteAlpha.500' fontWeight='bold'>{newYear.getFullYear()}</Text>
          <FireworksMoment/>
        </Box>
      </Suspense>
    );
  }

  if (currentDay === 'Dec 31') {
    if (seconds <= 10 && hours === 0 && minutes === 0) {
      return (
        <Box display='flex' justifyContent='center' alignItems='center' fontFamily='Poppins'>
          <Text fontSize='150' color='whiteAlpha.500' fontWeight='bold'>{seconds}</Text>
        </Box>
      )
    } else {
      return (
        <Box display='flex' paddingTop='4rem' fontFamily='Poppins' color='white' justifyContent='center'>
          <Stack direction='row' spacing='3rem'>
            {/* {minutes > 0 && seconds < 60 && ( */}
              <Box display='flex' alignItems='center' flexDirection='column'>
                <Text fontWeight='bold' fontSize='55'>{zeroPad(hours)}</Text>
                <Text marginTop='-30'>Horas</Text>
              </Box>
            {/* )} */}
            {/* {minutes > 0 && ( */}
              <Box display='flex' alignItems='center' flexDirection='column'>
                <Text fontWeight='bold' fontSize='55'>{zeroPad(minutes)}</Text>
                <Text marginTop='-30'>Minutos</Text>
              </Box>
            {/* )} */}
            <Box display='flex' alignItems='center' flexDirection='column'>
              <Text fontWeight='bold' fontSize='55'>{zeroPad(seconds)}</Text>
              <Text marginTop='-30'>Segundos</Text>
            </Box>
          </Stack>
        </Box> 
      );
    }
  }
};

export default Renderer