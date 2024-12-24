import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import { faCode, faHouse, faScrewdriverWrench, faX } from '@fortawesome/free-solid-svg-icons'
import * as  motion from 'motion/react-client'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { useEffect,useState } from 'react'
import { AnimatePresence } from 'motion/react'

function Navbar(){
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const [navBaricon,setNavbaricon]= useState(false);
  const updateNavbaricon = () =>{
    setNavbaricon(!navBaricon)
 }

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
    
    const closeNavicon = ()=>{
      setNavbaricon(false)
    }

    window.addEventListener("scroll",closeNavicon);

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
        onClick={()=>{
          updateNavbaricon()
        }}
        className="fixed md:hidden flex justify-center items-center w-8 h-8 bg-neonpink rounded-xl ms-8 mt-8 z-50 bg-opacity-25" >
        <AnimatePresence>
          {
          navBaricon &&  (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate:360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration:1,
                  ease:'easeInOut'
                }}>
                <button className='absolute top-[-1.5rem] left-[-1.5rem] text-md'><FontAwesomeIcon icon={faHouse} /></button>
                <button className='absolute top-[-1.5rem] right-[-1.5rem] text-md'><FontAwesomeIcon icon={faAddressCard} /></button>
                <button className='text-bluelight'><FontAwesomeIcon icon={faX}/> </button>
                <button className='absolute bottom-[-1.5rem] left-[-1.5rem] text-md'><FontAwesomeIcon icon={faCode} /></button>
                <button className='absolute bottom-[-1.5rem] right-[-1.5rem] text-md'><FontAwesomeIcon icon={faScrewdriverWrench} /></button>
              </motion.div>
            </>
          )
          }
        </AnimatePresence>
      </motion.div> 
    </>
  )
}

export default Navbar