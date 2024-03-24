import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="container">
      <Header title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
