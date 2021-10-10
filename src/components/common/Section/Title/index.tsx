import cn from "classnames";
import { FC } from "react";
import s from "./index.module.scss";

export const SectionTitle: FC<{ main?: boolean; text: string }> = ({
  main,
  text,
}) => {
  const styles = cn(s.root, {
    [s.main]: !!main,
  });

  return <h2 className={styles}>{text}</h2>;
};
