import { useLocation, useNavigate } from "react-router-dom";
import "../../pages/CSS/Footer.css";
import { navigation } from "../../utills/Constants";

export const Footer = () => {
  const navigate = useNavigate();
  const router = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="Footer-container">
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <h5>Links</h5>
          <ul className="footer-nav-menu">
            {navigation.map((linkItem) => (
              <li
                onClick={() => handleNavigation(linkItem.link)}
                className={
                  router.pathname === linkItem.link ? "footer-activeroute" : ""
                }
              >
                {linkItem.routeName}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="footer-nav-menu">
            <li
              onClick={() => handleNavigation("/login")}
              className={
                router.pathname === "/login" ? "footer-activeroute" : ""
              }
            >
              login
            </li>
            <li
              onClick={() => handleNavigation("/register")}
              className={
                router.pathname === "/register" ? "footer-activeroute" : ""
              }
            >
              Register
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        Copyright@ {new Date().getFullYear()}: All right reserved
      </div>
    </div>
  );
};
