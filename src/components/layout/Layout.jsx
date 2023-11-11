import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Styles from "./Layout.module.css";

const layout = () => {
  return (
    <>
      <Navbar className={Styles.navbar} />
      <Outlet className={Styles.outlet} />
      <Footer className={Styles.footer} />
    </>
  );
};

export default layout;
