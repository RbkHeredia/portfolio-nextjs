import Image from "next/image";

export default function Ring({children}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <div className="relative flex justify-center items-center">
      <Image src={'/ring.jpg'} alt="ring-stack" width={400} height={400} className="absolute w-[8rem]"/>
      {children}
    </div>
  )
}