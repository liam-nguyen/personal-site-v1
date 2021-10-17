import { FC } from 'react';

const NavLink: FC<{ text: string; link: string }> = ({ text, link }) => (
    <a className="text-4xl leading-8 text-opacity-75 transition-all hover:text-blue-500 cursor-pointer" href={link}>
        {text}
    </a>
);

export default NavLink;
