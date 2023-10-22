import { useProductContext } from "../context/products_context";
import logo from "../assets/logo.svg";
import SidebarContainer from "../styled-components/SidebarStyle";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfysloth" />
          <button
            className="close-btn"
            type="button"
            onClick={() => {
              closeSidebar();
            }}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link
                  to={url}
                  onClick={() => {
                    closeSidebar();
                  }}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/checkout"
              onClick={() => {
                closeSidebar();
              }}
            >
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
