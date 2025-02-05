import { DMSansFont } from "@/app/fonts/dm-sans";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ContactIcon {
  id: number;
  icon: JSX.Element;
  link: string;
  ariaLabel:string
}

export default function Footer() {
  const contactIcons: ContactIcon[] = [
    { id: 1, icon: <FontAwesomeIcon icon={faGithub} size="2x" />, link: "https://github.com/RbkHeredia", ariaLabel:'github' },
    { id: 2, icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />, link: "https://www.linkedin.com/in/rbkheredia/" , ariaLabel:'linkedin'},
    { id: 3, icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />, link: "mailto:rbkheredia90@gmail.com" , ariaLabel:'email'},
    { id: 4, icon: <FontAwesomeIcon icon={faWhatsapp} size="2x" />, link: "https://wa.me/5493515501318" , ariaLabel:'whatsapp'},
  ];

  return (
    <div
      id="contact"
      className={`p-8 flex flex-col gap-6 bg-white w-full items-center ${DMSansFont.className}`}
    >
      <div className="flex justify-between w-[80%]">
        <Image src={"/RB.png"} alt="logo" width={150} height={100} />
        <div className="flex gap-7 items-center">
          
          {contactIcons.map((net) => (
            <Link
              key={net.id}
              href={net.link}
              className="transition hover:ease-in hover:text-gold-light"
            >
              {net.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
