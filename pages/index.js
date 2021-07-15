import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home () {
  return (

    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' initial-scale={1} shrink-to-fit='no' />
        <meta name='description' content='The architecture world of Alessio Muganni' />
        <title>Alessio Muganni</title>
        <link rel='icon' href='/logo.png' />
        <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
      </Head>

      <main className='font-sans antialiased bg-white'>
        <Navigation />
        <Hero />
        <About />
        <Contact />
        <Footer />
        <script src='https://unpkg.com/aos@next/dist/aos.js' />
        <script>
          AOS.init();
        </script>
      </main>
    </div>
  )
};
