import Container from "@components/Container";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@components/Nav";
import Icon from "@components/Icon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <Container className="grid grid-cols-5 grid-row-1 gap-8 p-4 pt-8">
    <div className="col-span-1 row-span-1 flex flex-row align-middle">
      <Link href="/">
        <a className="flex items-center font-white">
          <Image src="/logo.svg" height={40} width={40} alt="logo" />
          <p className="ml-1 mt-1 text-2xl">Liam Nguyen</p>
        </a>
      </Link>
    </div>
    <div className="m-3 col-span-3 row-span-1 mt-4">
      <ul className="flex flex-row justify-around">
        <li>
          <NavLink text="Projects" link="#projects" />
        </li>
        <li>
          <NavLink text="Skills" link="#skills" />
        </li>
        <li>
          <NavLink text="About" link="#projects" />
        </li>
      </ul>
    </div>
    <div className="col-span-1 row-span-1 mt-4 flex flex-row space-x-10">
      <Icon link={"https://github.com/liam-nguyen"}>
        <FaGithub size="2rem" />
      </Icon>
      <Icon link={"https://github.com/liam-nguyen"}>
        <FaLinkedin size="2rem" />
      </Icon>
    </div>
  </Container>
);

export default Header;
