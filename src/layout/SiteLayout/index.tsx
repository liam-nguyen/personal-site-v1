import { FC, ReactElement } from "react";

const SiteLayout: FC = ({ children }) => (
  <div className="bg-liam-blue w-screen h-screen">{children}</div>
);

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);

export default SiteLayout;
