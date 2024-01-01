import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? '#ff9900' : '#ff9900', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>LINKS</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Laptop</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Headphones</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Sound Bar</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Peripherals</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Help Line</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Care Executive</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Chat With AI</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div id='feedback' className='flex items-center justify-center flex-col rounded-6 overflow-hidden'>
                <textarea spellCheck='false' className='outline-none border-none resize-none mb-10 rounded-6 p-3' style={{backgroundColor: mode === 'dark' ? 'black' : '#146eb4', color: mode === 'dark' ? '#146eb4' : '#fff', borderRadius: '8px',  }} name="" id="" cols="40" rows="10"></textarea>
                <button className='appearance-none bg-blue-600 border border-opacity-25 border-gray-300 hover:border-opacity-50 rounded-md shadow text-white cursor-pointer inline-block text-center text-sm font-semibold leading-5 px-4 py-2'>Send us your valuable feedback</button>
              </div>
            </div>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer