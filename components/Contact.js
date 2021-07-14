export default function Contact() {
  return (
    <section>
      <div className="flex items-center justify-center bg-white">


        <div className="bg-white w-full md:w-6/12 h-auto py-8 px-8 shadow-2xl">

          <h2 className="px-1 md:space-x-9 font-body font-medium text-center text-2xl md:text-4xl mb-10 text-indigo-900">Feel free to drop me a line:</h2>

          <form className="px-0 space-y-2 md:space-y-4">

            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input type="text" placeholder="Please enter your full name" required className="w-full border-2 border-gray-200 p-1 md:p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">E-mail</label>
              <input type="email" placeholder="Please enter a valid email address" required className="w-full border-2 border-gray-200 p-1 md:p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Phone (optional)</label>
              <input type="tel" placeholder="Please enter a valid phone number" className="w-full border-2 border-gray-200 p-1 md:p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Message</label>
              <input type="text" placeholder="Let me know your thougts" required className="w-full border-2 border-gray-200 p-1 md:p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" required className="font-semibold uppercase ml-2 text-sm">I agree to terms and conditions.</label>
            </div>

            <button className="block w-full mb-0 font-body font-bold bg-blue-400 hover:bg-gray-500 p-3 md:p-4 rounded text-indigo-900 hover:text-white transition duration-300 uppercase">Send Message</button>

          </form>

        </div>

      </div>
    </section>
  )
};
