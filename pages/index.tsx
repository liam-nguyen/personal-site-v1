import { NextPageWithLayout } from "src/types/pages";
import { getLayout } from "../src/layouts/ContentLayout";
import { HeroAnimation } from "@components/svg";
import { Hero } from "@components/common";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <Hero />
      <HeroAnimation />
    </div>
  );
};

HomePage.getLayout = getLayout;

export default HomePage;
