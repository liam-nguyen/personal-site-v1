import Icon from '@components/common/Icon/Icon';
import { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cn from 'classnames';

const SocialIcons: FC<{ className?: string }> = ({ className }) => {
    const styles = cn('flex flex-row space-x-10', className);

    return (
        <div className={styles}>
            <Icon link={'https://github.com/liam-nguyen'}>
                <FaGithub size="3rem" />
            </Icon>
            <Icon link={'https://github.com/liam-nguyen'}>
                <FaLinkedin size="3rem" />
            </Icon>
        </div>
    );
};

export default SocialIcons;
