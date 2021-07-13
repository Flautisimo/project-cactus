import Head from 'next/head'
import Navigation from '/components/Navigation'
import Hero from '/components/Hero'
import About from '../components/About'
import Footer from '/components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" initial-scale={1} shrink-to-fit="no" />
        <title>Alessio Muganni</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <body className='font-sans antialiased bg-white'>
        <Navigation />
        <Hero />
        <About />
      </body>
    </div>
  );
};
