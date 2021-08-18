import cn from "classnames";
import s from "./Home.module.scss";

const Home = () => {
  console.log(s);
  return (
    <div className={cn(s.root)}>
      <div className={s.info1}>1</div>
      <div className={s.info2}>2</div>
    </div>
  );
};

export default Home;
