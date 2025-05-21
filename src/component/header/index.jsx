import { MdMenuOpen, MdOutlineLightMode } from "react-icons/md";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { FaRegBell, FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Search from "../search";
 // Assuming you have a CSS file for styling

const Header = () => {
  const { isTogglesidebar, setTogglesidebar } = useContext(MyContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setTogglesidebar(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className="header d-flex align-items-center bg-light shadow-sm">
      <div className="container-fluid w-100">
        <div className="row align-items-center w-100">

          {/* Logo Section */}
          <div className="col-sm-2">
            <Link to="/" className="logo text-decoration-none">
              <span className="algo">Algostrike</span>
            </Link>
          </div>

          {/* Sidebar Toggle & Search */}
          <div className="col-sm-3 d-flex align-items-center">
            <button className="btn p-2 me-3" onClick={toggleSidebar}>
              {isTogglesidebar ? <RiMenuUnfold3Line size={24} /> : <MdMenuOpen size={24} />}
            </button>
            <Search />
          </div>

          {/* Actions: Theme, Notifications, Profile */}
          <div className="col-sm-7 d-flex align-items-center justify-content-end">
            <button className="btn p-2 me-3"><MdOutlineLightMode size={20} /></button>
            <button className="btn p-2 me-3"><FaRegBell size={18} /></button>

            {/* Profile Dropdown */}
            <div className="position-relative">
              <button className="btn p-2 me-4" onClick={toggleDropdown}>
                <FaUser size={18} />
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu show position-absolute end-0 mt-2 shadow-sm p-2">
                  <ul className="list-unstyled mb-0">
                    {/* You can add <li><a><CgProfile/> Profile</a></li> here if needed */}
                    <li>
                      <a href="#" className="dropdown-item d-flex align-items-center">
                        <IoMdLogOut className="me-2" /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
