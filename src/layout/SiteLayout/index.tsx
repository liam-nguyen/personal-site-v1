import { Container, Header } from "@components/index";
import { FC, ReactElement } from "react";

const SiteLayout: FC = ({ children }) => (
  <Container className="m-auto">
    <Header />
    {children}
  </Container>
);

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
