import { HeroAnimation } from "@components/svg";
import { FC } from "react";

import { HeroIntroduction } from "./Introduction";

const Hero: FC = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <HeroIntroduction />
      <HeroAnimation />
    </div>
  );
};

export default Hero;
