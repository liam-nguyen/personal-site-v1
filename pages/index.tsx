import { ReactElement } from "react";
import { NextPageWithLayout } from "../src/interfaces";
import Layout from "../src/layout";

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
