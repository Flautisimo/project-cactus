export default function Hero() {
  return (
    <div className="lg:w-full lg:h-screen">
      <div className="relative z-0">
        <img src="/hero-cover.jpg" />
        <div className="font-sans lg:absolute lg:bottom-0 lg:z-10 w-full h-auto lg:left-48 lg:h-72 lg:w-5/12 lg:pl-5 lg:p-2 lg:items-start lg:justify-center inline-flex flex-col space-y-1 items-center justify-center bg-white">
          <p className="text-4xl lg:text-6xl font-sans: Roboto font-bold tracking-widest leading-10 text-indigo-900 uppercase">Alessio Muganni</p>
          <p className="text-3xl text-center lg:text-5xl lg:text-left font-body font-medium leading-10 text-indigo-900 items-center justify-center">I call architecture the frozen music</p>
        </div>
      </div>
    </div>
  )
};