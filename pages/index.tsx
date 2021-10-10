import { NextPageWithLayout } from "src/types/pages";
import { getLayout } from "../src/layouts/ContentLayout";
import { Hero } from "@components/common";
import { Skills } from "@components/common/Skills";
import { Divider } from "@components/common/Divider";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Divider divider />
      <Skills />
    </>
  );
};

HomePage.getLayout = getLayout;

export default HomePage;
