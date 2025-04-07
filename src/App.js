import logo from './logo.svg';
import './App.css';
import Charts from './images/Charts.png';
import circle from './images/circle.png';
import vertical from './images/vertical.png';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Trigger the slide-in on mount
    const timeout = setTimeout(() => {
      setIsDarkMode(true)
    }, 100) // slight delay for smoother effect
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <div className='my-10 flex justify-between mx-auto w-[80%] relative flex-col md:flex-row gap-5' 
        style={{
          transform: isDarkMode ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1s ease-in-out',
        }}
      >
        <div className={`absolute w-[150%] md:w-full h-[1px] bg-blue-900 top-[50%] rotate-90 md:rotate-0 md:top-[23%] left-[-25%] md:left-[-0%]`}></div>
        <div className={`text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0`}>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <img className='w-[10%] md:w-auto' src={circle} />
          <img className='hidden md:block' src={vertical} />
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-30px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2008</h2>
          <img src={circle} />
          <img className='hidden md:block' src={vertical} />
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Awarded Stanford's who's who and America's top surgeosm</p>
        </div>
        <div className='ttext-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <img src={circle} />
          <img className='hidden md:block' src={vertical} />
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-30px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2008</h2>
          <img src={circle} />
          <img className='hidden md:block' src={vertical} />
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Awarded Stanford's who's who and America's top surgeosm</p>
        </div>
        <div className='text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <img src={circle} />
          <img className='hidden md:block' src={vertical} />
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
      </div>
      <div className="border border-gray-300 w-[80%] mx-auto my-10" 
        style={{
          transform: isDarkMode ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1s ease-in-out',
          transitionDelay: '0.5s',
        }}
      >
        <div className='flex flex-col md:flex-row justify-between p-10 gap-5'>
          <span>Patients</span>
          <div className='flex gap-5'>
          <div className='p-2 rounded-md bg-gray-300'>
              1M
            </div>
            <div className='p-2 rounded-lg'>
              3M
            </div>
            <div className='p-2 rounded-lg'>
              6M
            </div>
            <div className='p-2 rounded-lg'>
              1Y
            </div>
          </div>
        </div>
        <div className='flex justify-between p-10 items-center flex-col md:flex-row w-[100%]'>
          <h2 className='text-4xl'>52,000</h2>
          <div className='flex gap-5 flex-grow justify-end'>
          <div className='bg-orange-300 py-1 px-3 rounded-xl'>+23%</div>
            <span>vs</span>
            <span>last month</span>
          </div>
        </div>
        <img src={Charts} />
        <div className='md:flex justify-around text-gray-500 font-light flex-wrap grid grid-cols-4 md-px-0 px-5'>
          <span>Feb 1</span>
          <span>Feb 10</span>
          <span>Feb 20</span>
          <span className='text-gray-700'>Mar 1</span>
          <span>Mar 10</span>
          <span>Mar 20</span>
        </div>
      </div>
    </>
  );
}

export default App;
