import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='max-w-screen-lg m-auto'>
      <Navbar/>
      <div className='mt-20'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
