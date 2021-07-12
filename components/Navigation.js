export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 lg:px-48 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <style dangerouslySetInnerHTML={{__html: "\n      #menu-toggle:checked + #menu {\n        display: block;\n      }\n  " }} />

      <div className="flex-1 flex justify-between items-stretch">
        <a href="#">
          <img className="w-9 h-10" src="/logo.png" />
        </a>
      </div>
      <label for="menu-toggle" className='cursor-pointer lg:hidden'>
        <svg className="fill-current" width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.9792 28.5485H3.02083C1.35454 28.5485 0 27.2555 0 25.6674V3.771C0 2.18293 1.35454 0.889893 3.02083 0.889893H25.9792C27.6455 0.889893 29 2.18293 29 3.771V25.6674C29 27.2555 27.6455 28.5485 25.9792 28.5485ZM3.02083 2.04234C2.02154 2.04234 1.20833 2.81793 1.20833 3.771V25.6674C1.20833 26.6205 2.02154 27.3961 3.02083 27.3961H25.9792C26.9785 27.3961 27.7917 26.6205 27.7917 25.6674V3.771C27.7917 2.81793 26.9785 2.04234 25.9792 2.04234H3.02083Z" fill="#1C2368" />
          <path d="M19.9375 10.1094H9.0625C8.729 10.1094 8.45834 9.85127 8.45834 9.53319C8.45834 9.21512 8.729 8.95697 9.0625 8.95697H19.9375C20.271 8.95697 20.5417 9.21512 20.5417 9.53319C20.5417 9.85127 20.271 10.1094 19.9375 10.1094Z" fill="#1C2368" />
          <path d="M19.9375 15.2954H9.0625C8.729 15.2954 8.45834 15.0373 8.45834 14.7192C8.45834 14.4012 8.729 14.143 9.0625 14.143H19.9375C20.271 14.143 20.5417 14.4012 20.5417 14.7192C20.5417 15.0373 20.271 15.2954 19.9375 15.2954Z" fill="#1C2368" />
          <path d="M19.9375 20.4814H9.0625C8.729 20.4814 8.45834 20.2233 8.45834 19.9052C8.45834 19.5871 8.729 19.329 9.0625 19.329H19.9375C20.271 19.329 20.5417 19.5871 20.5417 19.9052C20.5417 20.2233 20.271 20.4814 19.9375 20.4814Z" fill="#1C2368" />
        </svg>
      </label>
      <input type='checkbox' className='hidden' id='menu-toggle' />
      <div className='hidden lg:flex lg:items-center lg:w-auto w-full' id='menu'>
        <nav>
          <ul className="lg:flex items-center justify-between font-roboto font-extrabold text-darkblue pt-4 lg:pt-0 text-transform: uppercase">
            <li><a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-500 hover:border-darkblue">Home</a></li>
            <li><a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-500 hover:border-darkblue">About me</a></li>
            <li><a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-500 hover:border-darkblue">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
};