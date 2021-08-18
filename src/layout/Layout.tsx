import { FC } from "react";
import s from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div id="main" className={s.root}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
