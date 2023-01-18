import '../styles/globals.css'
import "../public/fonts.css";
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div className='font-lato'>
    <Header />
    {/* <Navbar /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
    </div>
  </>
}

export default MyApp
