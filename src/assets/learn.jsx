import { useState,useRef } from "react"
import * as motion from "motion/react-client"

function ListEducation({educationName,yearStar,yearEnd}){
  return (
    <>
      <li className="p-5 " >
          <p className="font-semibold text-sm md:text-base " >{educationName} ({yearStar} - {yearEnd})</p>
          <a className=" font-light border-b-2 border-black hover:border-b-4" href="">Visit More </a>
        </li>
    </>
  )
  
}

function EducationContainer({Education}){
  const changeEducation = () =>{
    return(
        <ul className="flex m-auto border-l-2 border-black flex-col w-2/4 justify-center my-8 before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-black before:mt-[-0.5rem] before:ms-[-0.5rem] after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-black after:mb-[-0.5rem] after:ms-[-0.5rem]">
          {(Education == "formal")? 
            <>
              <ListEducation educationName={"Sman 9 Tana Toraja"} yearStar={"2016"} yearEnd={"2019"} />
              <ListEducation educationName={"Universitas Dipa Makassar"} yearStar={"2020"} yearEnd={"2024"} />
            </>
            :
            <>
              <ListEducation educationName={"Operator Alat Berat"} yearStar={"Maret 2023"} yearEnd={"Maret 2023"} />
              <ListEducation educationName={"Junior Network"} yearStar={"Maret 2023"} yearEnd={"Maret 2023"} />
              <ListEducation educationName={"Creating 3D Asset"} yearStar={"2020"} yearEnd={"2024"} />
            </>     
          }
        </ul>  
      )
  }
  return changeEducation()

}

export default function Learn(){
  const [Education,setEducation] = useState("formal");
  const containerRef = useRef<HTMLElement>(null);
  const { height } = containerRef
  
  return <div>
    <section className="max-w-screen-md min-h-screen m-auto"> 
      <p className="text-5xl font-extrabold text-bluelight text-end"> Education </p> 
      <div className="flex flex-column mb-[-2px]">
        <button 
        onClick={()=>{
          setEducation("formal")
        }} 
        className={`px-5 text-black font-mono bg-bluelight border-2 border-black border-r-0 border-b-0 z-20 rounded-tl-xl ${!(Education == "formal") && "text-opacity-50"}`}>Formal</button>
        <button
        onClick={()=>{
          setEducation("Non-Formal")
        }}
        className={`p-3 font-mono bg-neonpink border-2 border-black border-l-0 border-b-0 z-20 rounded-tr-xl text-black ${!(Education=="Non-Formal") && "text-opacity-50"}`}>Non-Formal</button>
      </div>
      <motion.div 
      className={`p-3 rounded-b-xl backdrop-blur-sm bg-opacity-50 border-black border-t-2 border-l-2 border-b-[8px] border-r-[8px] rounded-tr-xl ${(Education != 'formal')?'bg-neonpink':'bg-bluelight'}`}  >
        <EducationContainer Education={Education} />
      </motion.div>
    </section> 
  </div>
}