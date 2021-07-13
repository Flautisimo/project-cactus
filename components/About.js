export default function About() {
  return (
    <section>
      <div className="relative min-h-screen md:h-48 mt-32 bg-white p-10 md:px-48">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

          {/* Left */}
          <div className="">
            <div className="w-full h-64 rounded-lg bg-white">
              <img src="/alessio.jpg" className="shadow-2xl"></img>
            </div>
          </div>

          {/* Right */}
          <div className="font-body md:flex md:flex-col md:pt-16 justify-center">
            <h2 className="md:pl-8 text-indigo-900 text-2xl md:text-4xl font-medium mb-4">
              About me:
            </h2>
            <p className="md:pl-8 md:pt-4 md:text-lg text-indigo-900">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p className="md:pl-8 pt-3 md:pt-4 md:text-lg text-indigo-900">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <button className="block mt-6 md:ml-8 w-full md:w-4/12 font-body font-bold bg-blue-400 hover:bg-gray-500 p-3 md:p-4 rounded text-indigo-900 hover:text-white transition duration-300 uppercase">My Portfolio</button>
          </div>

        </div>
      </div>
    </section>
  )
};