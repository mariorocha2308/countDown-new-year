import { Suspense, lazy } from 'react';
import { currentDay } from './helpers';
const CountDown = lazy(() => import('./components/CountDownYear'))

function App() {

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      let tag = document.getElementById('container'); 
      tag?.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return (
    <>
      <section className='hidden 2xl:block' id='container'>
        <button onClick={handleFullScreen} className='absolute right-8 bg-blue-500 bg-opacity-50 top-5 p-1.5 rounded-md hover:bg-blue-400 z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
        </button>

        {currentDay === 'Dec 31' 
          ? <Suspense>
              <CountDown/>
            </Suspense>
          : <video src="../assets/videos/christmas.mp4" autoPlay muted loop></video>
        }
      </section>

      <section className='w-full h-screen bg-slate-900 2xl:hidden flex justify-center items-center text-white p-10'>
        <div className="flex flex-col gap-2 p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <strong className='text-base'>Aviso</strong>
          <h1 className='text-sm font-bold'>Probablemente tienes una pantalla con una anchura muy reducida y no puedes disfrutar del contenido</h1> 
        </div>
      </section>
    </>
  )
}

export default App