import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"

function Profil(){
  const [img,setImg]= useState("./public/img/icca.jpg")
  let changepicture=()=>{
    if(img === "./public/img/Arthur.jpg"){
      setImg("./public/img/icca.jpg")
    }else{
      setImg("./public/img/Arthur.jpg")
    }
  }
  return <>
    <img onClick={changepicture} className="w-36 h-36 rounded-full object-cover cursor-pointer" src={img} />
  </>
}

function Beranda(){
  const [title,setTitle] =useState('')
  const myTitle ='Web Development .'
  
  useEffect(()=>{
    let current =0
    const intervalId=setInterval(() => {
      setTitle(myTitle.slice(0,current+1))
      current++
      if (current === myTitle.length) {
        setTimeout(()=>{
          current =0
        },1000)
      }
    }, 300);
    return () => clearInterval(intervalId);
  },[])

  return(
    <>
      <section>
        <div className=" relative flex justify-evenly items-center min-h-screen flex-col md:flex-row">
          <Profil/>
          <div className="p-2">
            <p className="text-xl font-extrabold md:text-3xl  ">Menuju tak terbatas Dan
              <span className="text-bluelight block">Melampaui-Nya🚀</span> 
            </p>
            <p className='title font-bold'>{title}</p>
          </div>
        </div>
        <div className="flex gap-3 absolute bottom-0 left-1/2 text-xl p-4 translate-x-[-80px] bg-transparent border-2 border-neonpink border-b-4 border-r-4 rounded-3xl mb-4 animate-pulse">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faXTwitter} />
      </div>
      </section>
    </>
  )
}
export default Beranda