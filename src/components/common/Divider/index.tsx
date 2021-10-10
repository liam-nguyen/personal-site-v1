import { FC } from "react";
import s from "./index.module.scss";
import cn from "classnames";

export const Divider: FC<{ colorAlt?: boolean; divider?: boolean }> = ({
  colorAlt,
  divider,
}) => {
  const styles = cn(s.root, {
    [s.colorAlt]: !!colorAlt,
    [s.divider]: !!divider,
  });

  return <div className={styles}></div>;
};
