import Image from "next/image";

export default function Intro(){
  return(
    <div className="relative md:max-h-screen object-cover overflow-hidden">
      <Image src={'/lotrmap.jpg'} alt="" width={1920} height={1080} className="absolute z-[-1] opacity-30 max-w-[140%] w-[140%]" />
      <div className="flex text-center md:text-left items-center md:justify-between m-12 md:m-24 flex-col-reverse gap-y-3 md:flex-row">
        <h1 className=" md:w-3/6 text-xl md:text-4xl lg:text-6xl">
          Hola, mi nombre es Rebeca, construyo cosas para la web
        </h1>
        <div className="h-[10rem] w-[15rem] md:h-[15rem]  rounded-full flex justify-center items-center">
          <Image className="w-[10rem] md:w-[15rem] rounded-full" src='/mi-foto.png' alt="me" width={2250} height={2333} />

        </div>
      </div>
    </div>
  )
}