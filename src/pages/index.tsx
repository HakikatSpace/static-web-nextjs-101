import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Review from '../components/Review'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet" /> 
      </Head>
      <Nav id="nav" />
      <Hero id="hero" />
      <Menu id="menu" />
      <Review id="review" />
      <ContactUs id="contact" />
      <Footer />
    </div>
  )
}

export default Home
