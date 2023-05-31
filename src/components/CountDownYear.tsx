import { Box, Stack, Text } from '@chakra-ui/react'
import Countdown, { zeroPad } from 'react-countdown';
import FireworksMoment from './FireworksMoment';
import '../index.css'

const year = new Date()

const Renderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: unknown}) => {
  
  const currentDay = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})

  if (completed) {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' fontFamily='Poppins'>
          <Text fontSize='150' color='whiteAlpha.500' fontWeight='bold'>{year.getFullYear()}</Text>
          <FireworksMoment/>
        </Box>
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
            <Box display='flex' alignItems='center' flexDirection='column'>
              <Text fontWeight='bold' fontSize='55'>{zeroPad(hours)}</Text>
              <Text marginTop='1'>Horas</Text>
            </Box>
            <Box display='flex' alignItems='center' flexDirection='column'>
              <Text fontWeight='bold' fontSize='55'>{zeroPad(minutes)}</Text>
              <Text marginTop='1'>Minutos</Text>
            </Box>
            <Box display='flex' alignItems='center' flexDirection='column'>
              <Text fontWeight='bold' fontSize='55'>{zeroPad(seconds)}</Text>
              <Text marginTop='1'>Segundos</Text>
            </Box>
          </Stack>
        </Box> 
      );
    }
  }
};

const CountDownComponent = () => {

  return ( 
    <Countdown
    date={new Date(`Dec 31, ${year.getFullYear() + 1} 00:00:00`)}
    renderer={Renderer}
  /> 
  );
}

export default CountDownComponent;