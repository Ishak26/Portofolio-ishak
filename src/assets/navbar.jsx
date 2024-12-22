import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'


function navbar(){
  
  return(
    <>
      <div className="fixed grid grid-cols-2 w-full items-center gap-3 text-bluelight p-4 font-semibold font-serif">
        <div className="text-lg m-auto">
          <p> <FontAwesomeIcon className='animate-spin' icon={faReact} />  IcCA</p>
        </div>
        <ul className="flex  flex-wrap gap-2 font-sans">
            <li className=""></li>
            <li className="">About</li>
            <li className="">Education</li>
            <li className="">Experience</li>
            <li className="">Skils</li>
          </ul>
      </div>
    </>
  )
}

export default navbar