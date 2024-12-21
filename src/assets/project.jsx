import { useEffect, useState } from "react"

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
          <div className="w-80 h-80 rounded-lg bg-abuabu">
            <img className="w-full h-3/5 object-contain bg-abusedang  rounded-lg" src={`img/project/${ImgItems}`} alt=""/>
            <p className="text-sm font-semibold md:w-1/2 m-auto text-center tracking-tighter">{projectName}</p>
            <div className="px-5">
              <p className="p-2 font-bold text-sm">stack : { }</p>
              <button className="bg-neonpink px-3 text-black rounded-md" href="">detail</button>
            </div>
          </div>
        </>
}
export default function Project(){
  return <>
      <section className="max-w-screen-md m-auto">
          <h1 className="text-5xl mb-3 text-bluelight font-extrabold">Project saya</h1>
          <div className="flex gap-2 justify-center">
          <Card projectName="Sistem Informasi Desa Buntu Barana" projectImg={["project sistem informasi desa.png","berita.png","galeri.png","ke.png","layanan.png","profil desa.png"]}/>
          <Card projectName="Sistem Informasi Desa Buntu Barana" projectImg={["project sistem informasi desa.png","berita.png","galeri.png","ke.png","layanan.png","profil desa.png"]}/>
          </div>
      </section>
    </>
}