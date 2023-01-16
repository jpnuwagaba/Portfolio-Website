import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    {/* <Navbar /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>
}

export default MyApp
