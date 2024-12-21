import { useState,useEffect} from 'react';

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
        <div className="flex justify-evenly items-center min-h-96 flex-col md:flex-row">
          {/* <img className="w-36 h-36 rounded-full object-cover" src="./public/img/icca.jpg" alt="" /> */}
          <Profil/>
          <div className="">
            <p className="text-3xl font-extrabold">Menuju tak terbatas Dan
              <span className="text-bluelight block">Melampaui-Nya🚀</span> 
            </p>
            <p className='title font-bold'>{title}</p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Beranda