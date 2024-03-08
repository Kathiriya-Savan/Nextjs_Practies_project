//"use client"
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainBackground from "./main-header-background";
import NavLink from "./nav-link";
//import { usePathname } from "next/navigation";

export default function MainHeader() {
  //const path = usePathname();
  return (
    <>
      <MainBackground />
      <header>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
            <NavLink href='/meals'>Brows Meals</NavLink>
            </li>
            <li>
            <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
