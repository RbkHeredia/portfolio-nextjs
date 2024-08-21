"use client";
import { uncial } from "@/app/typography/uncial";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCubesStacked, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

interface LinkItem {
  id: number;
  title: string;
  path: string;
  icon: JSX.Element;
}

interface ContactIcon {
  id: number;
  icon: JSX.Element;
  link: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const links: LinkItem[] = [
    { id: 1, title: "Sobre mi", path: "#", icon: <FontAwesomeIcon icon={faUser} /> },
    { id: 2, title: "Tecnologias", path: "#", icon: <FontAwesomeIcon icon={faCubesStacked} /> },
    { id: 3, title: "Proyectos", path: "#", icon: <FontAwesomeIcon icon={faListCheck} /> },
    { id: 4, title: "Contacto", path: "#", icon: <FontAwesomeIcon icon={faAddressCard} /> },
  ];

  const contactIcons: ContactIcon[] = [
    { id: 1, icon: <FontAwesomeIcon icon={faGithub} size="2x" />, link: "#" },
    { id: 2, icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />, link: "#" },
    { id: 3, icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />, link: "#" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={`px-[10%] py-[2rem] ${uncial.className}`}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="md:hidden"
          icon={<FontAwesomeIcon icon={faBars} color="gold-dark" />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <p className="font-bold text-gold-dark">RBk</p>
        </NavbarBrand>  
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-8 text-gold-light" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.id}>
            <Link href={link.path}>
              {link.icon} &nbsp; {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-8">
        {contactIcons.map((net) => (
          <NavbarItem key={net.id} className="hidden lg:flex">
            <Link href={net.link}>{net.icon}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {links.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link className="w-full" href={item.path} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
