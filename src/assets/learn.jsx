export default function Learn(){
  return <div>
    <section className="mt-14 max-w-screen-md min-h-screen m-auto"> 
      <p className="text-5xl font-extrabold text-bluelight text-end"> Education </p>  
      <ul className="flex m-auto border-l-2 border-black flex-col w-2/4 justify-center mt-14 before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-black before:mt-[-0.5rem] before:ms-[-0.5rem] after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-black after:mb-[-0.5rem] after:ms-[-0.5rem]">
        <li className="p-5 " >
          <p className="font-semibold" >Sman 9 Tana Toraja (2016 - 2019)</p>
          <a className=" font-light border-b-2 border-black hover:border-b-4" href="">Visit More </a>
        </li>
        <li className="p-5" >
          <p className="font-semibold">Universitas Dipa Makassar (2020 - 2024)</p>
          <a className="font-light border-b-2 border-black hover:border-b-4" href="">Visit More</a>
        </li>
      </ul>
    </section> 
  </div>
}