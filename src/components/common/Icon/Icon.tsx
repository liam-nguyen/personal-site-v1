import { FC } from 'react';

const Icon: FC<{ link: string }> = ({ children, link }) => {
    return (
        <a className="transition-all round-6xl cursor-pointer" href={link}>
            {children}
        </a>
    );
};

export default Icon;
