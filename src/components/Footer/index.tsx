import { FC } from "react";
import Copyright from "./Copyright";
import { SocialIcons } from "@components/common";

const CommunicationGrid: FC = ({ children }) => (
  <ul className="border-top-2 border-white border-opacity-10 grid grid-cols-3 gap-16 pt-16 pb-12">
    {children}
  </ul>
);

const CommunicationItem: FC<{
  title: string;
  link: { name: string; href: string };
}> = ({ title, link: { name, href } }) => (
  <li className="flex flex-col w-full">
    <h4 className="font-normal text-xl leading-10 uppercase text-opacity-40 mb-7">
      {title}
    </h4>
    <a
      className="text-3xl leading-8 text-opacity-75 mb-4 transition-all relative left-0 hover:text-black"
      href={href}
    >
      {name}
    </a>
  </li>
);

const Footer = () => (
  <section className="w-4/5 pt-8 pr-20 pb-16 mt-4 mx-auto">
    <CommunicationGrid>
      <CommunicationItem
        title="Chat"
        link={{ name: "Telegram", href: "https://t.me/lordarcadius" }}
      />
      <CommunicationItem
        title="Email"
        link={{
          name: "nguyen.dch@gmail.com",
          href: "mailto:nguyen.dch@gmail.com",
        }}
      />
    </CommunicationGrid>
    <div className="flex flex-row justify-between">
      <Copyright />
      <SocialIcons />
    </div>
  </section>
);

export default Footer;
