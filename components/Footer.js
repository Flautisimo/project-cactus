export default function Footer() {
  return (
    <div className='flex flex-col items-center flex-1 w-full px-20 text-center'>
    <div className="flex space-x-32 items-center justify-start pl-56 pr-60 pt-4 pb-5 bg-indigo-900" style={{ width: 1678, height: 70, }}>
      <p className="w-1/4 h-full text-3xl font-bold tracking-widest leading-9 text-white uppercase">Alessio Muganni</p>
      <p className="text-base font-bold text-white uppercase">Home</p>
      <p className="text-base font-bold text-white uppercase">about me</p>
      <p className="text-base font-bold text-white uppercase">contact</p>
      <div className="flex space-x-14 items-center justify-end w-1/6 h-8">
        <div className="Facebook w-8 h-full bg-white rounded-lg" src="/facebook.svg" />
        <div className="w-8 h-full bg-white rounded-lg" />
        <img className="w-8 h-full rounded-lg" src="https://via.placeholder.com/32x32" />
      </div>
    </div>
    </div>
  )
};