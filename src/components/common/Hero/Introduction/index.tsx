import { HeroTypedAnimation } from "../HeroTypedAnimation";
import { Emoji } from "../..";
import { SectionTitle } from "@components/common/Section/Title";

export const HeroIntroduction = () => (
  <section className="flex flex-row">
    <div className="flex flex-col my-0 mx-auto">
      <SectionTitle text="Hey there, " />
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
