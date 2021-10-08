import { Container } from "@components/index";
import { FC, ReactElement } from "react";

const SiteLayout: FC = ({ children }) => (
  <Container className="m-auto">{children}</Container>
);

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
