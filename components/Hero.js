export default function Hero() {
  return (
    <section data-aos="fade-in" data-aos-duration="3000">
      <div className="Hero relative w-full h-auto box-border border-l-8 border-r-8 border-white lg:w-full lg:border-none md:shadow-2xl">

        <img src="/hero-cover.jpg" />

        <div className="Box-wrapper flex flex-col absolute w-full h-auto box-border border-8 border-white bg-white lg:bottom-0 lg:space-y-6 lg:pt-12 lg:border-none lg:left-48 lg:h-72 lg:w-5/12 lg:pl-5 lg:p-2">
          <p className="text-4xl lg:text-6xl font-sans font-bold tracking-widest leading-10 text-indigo-900 uppercase">Alessio Muganni</p>
          <p className="text-3xl text-center lg:text-5xl lg:text-left font-body font-medium leading-10 text-indigo-900 lg:items-center lg:justify-center">I call architecture the frozen music</p>
        </div>

      </div>
    </section>
  )
};
