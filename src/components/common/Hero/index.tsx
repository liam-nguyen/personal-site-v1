import React, { FC, useEffect, useRef } from "react";
import cn from "classnames";
import s from "./index.module.scss";
import { HeroTypedAnimation } from "./HeroTypedAnimation";
import { Emoji } from "..";

const Hero: FC = () => {
  return (
    <section className="flex flex-row">
      <div className="flex flex-col my-0 mx-auto">
        <h2
          className={cn(
            "font-extrabold text-8xl w-max mb-7 pt-24 pb-12 pl-0",
            s.root
          )}
        >
          Hey there,
        </h2>
        <p className="text-4xl font-light leading-16">
          <Emoji symbol="👋" label="Wave hand" className="text-6xl" />
          <span> This is Liam Nguyen.</span>
          <span className="block">
            I am a Full Stack Developer specialized in
          </span>
        </p>
        <HeroTypedAnimation className="text-7xl mt-20" />
      </div>
    </section>
  );
};

export default Hero;
