import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import { faCode, faHouse, faScrewdriverWrench, faX } from '@fortawesome/free-solid-svg-icons'
import * as  motion from 'motion/react-client'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { useEffect,useState } from 'react'


function Navbar(){
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateConstraints = () => {
      const { innerWidth, innerHeight } = window;
      setConstraints({
        top: 0,
        left: 0,
        right: innerWidth - 100,
        bottom: innerHeight - 100, 
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);
  return(
    <>
      <div className="hidden fixed md:grid grid-cols-2 w-full items-center gap-3 text-bluelight p-4 font-semibold font-serif">
        <div className="text-lg m-auto">
          <p> <FontAwesomeIcon className='animate-spin' icon={faReact} />IcCA</p>
        </div>
        <ul className="md:flex  md:flex-wrap md:gap-2 font-sans">
            <li className=""></li>
            <li className="">About</li>
            <li className="">Education</li>
            <li className="">Experience</li>
            <li className="">Skils</li>
          </ul>
      </div>
      <motion.div 
      drag
      dragConstraints={constraints} 
      className="fixed md:hidden flex justify-center items-center w-8 h-8 bg-neonpink rounded-xl ms-8 mt-8 z-50  " >
        <button className='absolute top-[-1rem] left-[-1rem] text-sm'><FontAwesomeIcon icon={faHouse} /></button>
        <button className='absolute top-[-1rem] right-[-1rem] text-sm'><FontAwesomeIcon icon={faAddressCard} /></button>
        <button className='text-bluelight'><FontAwesomeIcon icon={faX}/> </button>
        <button className='absolute bottom-[-1rem] left-[-1rem] text-sm'><FontAwesomeIcon icon={faCode} /></button>
        <button className='absolute bottom-[-1rem] right-[-1rem] text-sm'><FontAwesomeIcon icon={faScrewdriverWrench} /></button>      
      </motion.div> 
    </>
  )
}

export default Navbar