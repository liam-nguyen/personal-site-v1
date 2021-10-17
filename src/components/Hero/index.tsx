import { HeroAnimation } from '@components/common/Icon';
import { FC } from 'react';

import { HeroIntroduction } from './Introduction';

const Hero: FC = () => {
    return (
        <div className="flex flex-row justify-center lg:grid lg:grid-cols-2 mx-auto w-full">
            <HeroIntroduction />
            <div className="hidden lg:flex lg:flex-row lg:justify-center lg:align-middle mt-10">
                <HeroAnimation height={400} width={400} />
            </div>
        </div>
    );
};

export default Hero;
