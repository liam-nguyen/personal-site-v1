import { FC } from "react";

const Container: FC<{ className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Container;
