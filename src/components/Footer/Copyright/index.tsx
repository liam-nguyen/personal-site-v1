import Link from "next/link";

const SelfLink = () => (
  <Link href="https://www.liamng.com" passHref>
    <a className="px-5 text-blue-500">Liam Nguyen</a>
  </Link>
);

const Copyright = () => (
  <div className="flex flex-col w-full">
    <div className="flex align-baseline flex-wrap mr-auto">
      <p className="text-opacity-50 text-3xl leading-10 pt-6">
        <span>&copy; 2021</span>
        <SelfLink />
        <span>| All right reserved.</span>
      </p>
    </div>
  </div>
);

export default Copyright;
