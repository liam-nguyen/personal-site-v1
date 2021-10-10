import { FC } from "react";

const Emoji: FC<{ symbol: string; label: string; className?: string }> = ({
  symbol,
  label = "",
  className,
}) => (
  <span
    className={className}
    role="img"
    aria-label={label || ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
