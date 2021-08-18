import { FC } from "react";

type LayoutProps = {};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
