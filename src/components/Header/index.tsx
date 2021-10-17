import Container from '@components/common/Container';
import Link from 'next/link';
import { NavLink } from '@components/Nav';
import { SocialIcons } from '@components/common';

const Header = () => (
    <Container className="grid grid-cols-5 grid-row-1 gap-8 p-4 pt-8">
        <div className="col-span-1 row-span-1 flex flex-row align-middle">
            <Link href="/">
                <a className="flex items-center font-white">
                    <p className="ml-1 text-4xl">Liam Nguyen</p>
                </a>
            </Link>
        </div>
        <div className="m-3 col-span-3 row-span-1 mt-4">
            <ul className="flex flex-row justify-around">
                {/* <li>
                    <NavLink text="Projects" link="#projects" />
                </li> */}
                <li>
                    <NavLink text="Skills" link="#skills" />
                </li>
                <li>
                    <NavLink text="About" link="#projects" />
                </li>
            </ul>
        </div>
        <SocialIcons className="col-span-1 row-span-1 mt-4" />
    </Container>
);

export default Header;
