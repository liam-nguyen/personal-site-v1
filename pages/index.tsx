import { NextPageWithLayout } from "../src/interfaces";
import { getLayout } from "../src/layout/SiteLayout";

const HomePage: NextPageWithLayout = () => {
  return <div></div>;
};

HomePage.getLayout = getLayout;

export default HomePage;
