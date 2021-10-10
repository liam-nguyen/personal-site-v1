import { Container, Header } from "@components/index";
import { FC, ReactElement } from "react";

const SiteLayout: FC = ({ children }) => (
  <Container className="m-auto w-3/4">
    <Header />
    {children}
  </Container>
);

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
