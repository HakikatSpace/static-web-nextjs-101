import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" /> 
      </Head>
      <Button>Find Us</Button>
      <Button>Our Menu</Button>
    </div>
  )
}

export default Home
