import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import {faJs,faLaravel,faPhp,faBootstrap } from "@fortawesome/free-brands-svg-icons"

function Card({projectName,projectImg}){ 
  const [ImgItems,setImgItems] = useState(projectImg[0])
  const imgs =[...projectImg]
  useEffect(()=>{
    let current=0;
    const intervalId = setInterval(() => {
      setImgItems(imgs[current])
      current++;
      if (current===imgs.length){
        setTimeout(() => {
          current=0;
        }, 3000);
      }
    },5000);
    return () =>clearInterval(intervalId)
  },[])
  return <>
          <div className="w-80 h-80 rounded-lg bg-abuabu relative">
            <img className="w-full h-3/5 object-contain bg-abusedang  rounded-lg" src={`img/project/${ImgItems}`} alt=""/>
            <h2 className="mb-4 font-sans text-lg font-medium text-black px-4 bg-bluelight py-3 rounded-b-lg m-auto text-center leading-5 border-2 border-black  shadow-[1px_8px_0_rgba(24,24,24)] ">{projectName}</h2>
            <div className="px-5">
              <div className="grid grid-cols-[60px_auto]">
                <p className=" font-bold mt-[-5px] ">stack : </p>
                <div className="flex gap-3 text-xl items-center ">
                  <FontAwesomeIcon className="text-indigo-400 transform transition-transform duration-300 hover:scale-125" icon={faPhp}/>
                  <FontAwesomeIcon className="text-red-700 transform transition-transform duration-300 hover:scale-125" icon={faLaravel}/>
                  <FontAwesomeIcon className="text-yellow-400 transform transition-transform duration-300 hover:scale-125" icon={faJs}/>
                  <FontAwesomeIcon className="text-purple-700 transform transition-transform duration-300 hover:scale-125" icon={faBootstrap}/>
                </div>
              </div>
              <button className="bg-bluelight w-8 h-8 text-black rounded-full absolute bottom-0 end-0 m-4" href=""><FontAwesomeIcon icon={faCircleInfo}/></button>
            </div>
          </div>
        </>
}
export default function Project(){
  return <>
      <section className="mt-11 max-w-screen-md m-auto min-h-screen ">
          <h1 className="text-5xl mb-11 text-neonpink font-extrabold">Experience</h1>
          <div className="flex gap-2 justify-center">
          <Card projectName="Sistem Informasi Desa Buntu Barana" projectImg={["project sistem informasi desa.png","berita.png","galeri.png","ke.png","layanan.png","profil desa.png"]}/>
          </div>
      </section>
    </>
}