import { FC, useEffect, useRef } from "react";
import Typed from "typed.js";

export const HeroTypedAnimation: FC<{ className?: string }> = ({
  className,
}) => {
  const typedTarget = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedTarget.current) {
      const typed = new Typed(typedTarget.current, {
        strings: [
          "Express JS",
          "Flask",
          "GraphQL",
          "Next JS",
          "Node JS",
          "Python",
          "React",
          "Typescript",
          "PostgresQL",
        ],
        smartBackspace: true,
        typeSpeed: 80,
        loop: true,
        backSpeed: 80,
        startDelay: 80,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [typedTarget]);

  return (
    <div className={className}>
      <span ref={typedTarget} className="text-blue-500 inline w-auto"></span>
    </div>
  );
};
