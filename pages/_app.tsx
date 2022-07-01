import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='max-w-screen-lg m-auto mt-20'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
