import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
