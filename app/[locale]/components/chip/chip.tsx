
type chipType ={
  tech:string
}

export default function Chip ({tech}:chipType){
  return(
    <div className="bg-gold-light py-1 px-3 bg-opacity-30 border border-[#B8860B] rounded-[20px] w-max">
      <p className="text-gold-dark">{tech}</p>
    </div>
  )
}