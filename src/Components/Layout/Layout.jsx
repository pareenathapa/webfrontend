import { Footer } from "../Footer";
import Navbar from "../Navbar/Navbar";
import "../../pages/CSS/Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
};
