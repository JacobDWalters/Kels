import Head from 'next/head'
import About from '../components/About'
import Listings from '../components/Listings'
import Sell from '../components/Sell'
import Contact from '../components/Contact'
import Reviews from '../components/Reviews'
import Main from '../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kelsey Kok Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Helping You Find Home" />
      </Head>
      <About />
      <Main />
      <Reviews />
      <Contact />
    </>
  )
}
