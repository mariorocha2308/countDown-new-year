import { useRef, useEffect } from 'react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'

const FireworksMoment = () => {

  const ref = useRef<FireworksHandlers>(null)

  useEffect(() => {
    // duration 2 minutes = 120000
    ref.current?.start()
    setTimeout(() => {
      ref.current?.waitStop()
    }, 120000);
  }, []);

  return ( 
    <Fireworks ref={ref}
      options={{ 
        rocketsPoint: { min: 0, max: 100 }, 
        gravity: 1.41, 
        decay: { min: 0.011, max: 0.020}, 
        delay: { min: 44.84, max: 57.90 }, 
        sound: { enabled: true, files: [
          location.href + 'sounds/explosion0.mp3',
          location.href + 'sounds/explosion1.mp3',
          location.href + 'sounds/explosion2.mp3'
        ], volume: { min: 4, max: 8 } } }}
      style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'fixed', background: 'transparent' }}
    />
  );
}

export default FireworksMoment;