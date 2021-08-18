import { ReactElement } from "react";
import { NextPageWithLayout } from "../src/interfaces";
import { Layout } from "../src/layout";
import Home from "../src/pages/Home";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
