import { PropsWithChildren } from "react";
import ContentWrapper from "./ContentWrapper";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper>
        <Topbar />
        {children}
        <Footer />
      </ContentWrapper>
      <ScrollToTop />
    </div>
  );
}
