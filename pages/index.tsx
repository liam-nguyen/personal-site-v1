import { NextPageWithLayout } from "src/types/pages";
import { getLayout } from "../src/layouts/ContentLayout";

const HomePage: NextPageWithLayout = () => {
  return <div className="bg-blue-500"></div>;
};

HomePage.getLayout = getLayout;

export default HomePage;
