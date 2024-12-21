// import  fontAwesomeIcon  from '@fortawesome/react-fontawesome'
function navbar(){
  return(
    <>
      <div className="flex flex-wrap justify-center gap-3 text-bluelight p-4 font-semibold font-serif">
        <div className="text-lg">
        {/* <fontAwesomeIcon icon="fa-solid fa-code"/> */}
          <p>IcCA</p>
        </div>
        <ul className="flex flex-wrap gap-2">
            <li className=""></li>
            <li className="">About</li>
            <li className="">Learn</li>
            <li className="">Myproject</li>
            <li className="">Skils</li>
          </ul>
      </div>
    </>
  )
}

export default navbar