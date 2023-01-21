import '../styles/globals.css'
import "../public/fonts.css";
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideNavigation from '../components/SideNavigation';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div className='font-lato relative'>
    <Header />
    {/* <Navbar /> */}
    <Component {...pageProps} />
    <Footer />
    {/* <div className='fixed top-[50%] right-0 translate-y-[-50%]'><SideNavigation /></div> */}
    </div>
  </>
}

export default MyApp
