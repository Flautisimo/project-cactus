import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section>
      <footer className="Container relative bottom-0 max-h-screen md:h-auto mt-16 md:mt-20 py-8 lg:py-5 md:px-52 bg-indigo-900">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3">

          {/* Left */}
          <div className="">
            <div className="w-full h-full text-center md:text-left justify-center bg-indigo-900 text-white font-sans font-bold text-3xl md:text-4xl tracking-widest leading-9 uppercase">
              Alessio Muganni
            </div>
          </div>

          {/* Center */}
          <div className="w-full h-auto bg-indigo-900">
            <ul className="flex flex-col md:flex-row text-center justify-around md:mt-2 font-roboto font-bold text-white text-lg md:text-xl uppercase">
              <li><a href="#" className="block border-b-2 border-transparent hover:text-blue-300 hover:border-white">Home</a></li>
              <li><a href="#About" className="block border-b-2 border-transparent hover:text-blue-300 hover:border-white">About me</a></li>
              <li><a href="#Contact" className="block border-b-2 border-transparent hover:text-blue-300 hover:border-white">Contact</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex w-full md:pl-56 justify-around md:justify-between md:items-center text-white">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x" className="hover:animate-bounce"></FontAwesomeIcon></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:animate-bounce"></FontAwesomeIcon></a>
            <a href="#"><FontAwesomeIcon icon={faInstagramSquare} size="2x" className="hover:animate-bounce"></FontAwesomeIcon></a>
          </div>

        </div>
      </footer>
    </section>
  )
};