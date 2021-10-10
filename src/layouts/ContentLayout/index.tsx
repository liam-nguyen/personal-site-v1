import { Container, Header } from "@components/index";
import { FC, ReactElement } from "react";
import { Footer } from "@components/index";
import { getSiteLayout } from "@layouts/index";

const ContentLayout: FC = ({ children }) => (
  <Container className="m-auto w-3/4">
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
);

export const getLayout = (page: ReactElement) =>
  getSiteLayout(<ContentLayout>{page}</ContentLayout>);

export default ContentLayout;
