import React, { useContext } from "react";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  AiOutlineDashboard,
} from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsersRound, LuStore, LuFileBadge } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MyContext } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const context = useContext(MyContext);
  const isCollapsed = context.isTogglesidebar;

  return (
    <div className="sidebar">
      

      <ul>
        <span className="h1">Algo Products</span>

        <NavLink to="/strategy" className={({ isActive }) => isActive ? "nav-active" : ""}>
          <li>
            <Button className="w-100">
              <span className="icon"><LuStore /></span>
              <span className="icon-text">Strategy</span>
            </Button>
          </li>
        </NavLink>

        <hr />

        <span className="h1">Algo Execution & Analytics</span>

        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-active" : ""}>
          <li>
            <Button className="w-100">
              <span className="icon"><AiOutlineDashboard /></span>
              <span>Dashboard</span>
            </Button>
          </li>
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-active" : ""}>
          <li>
            <Button className="w-100">
              <span className="icon"><FaRegChartBar /></span>
              <span>My Portfolio</span>
            </Button>
          </li>
        </NavLink>

        <NavLink to="/report" className={({ isActive }) => isActive ? "nav-active" : ""}>
          <li>
            <Button className="w-100">
              <span className="icon"><TbReportSearch /></span>
              <span>Live Report</span>
            </Button>
          </li>
        </NavLink>

        <hr />

        <span className="h1">Setup</span>

        <NavLink to="/broking" className={({ isActive }) => isActive ? "nav-active" : ""}>
          <li>
            <Button className="w-100">
              <span className="icon"><LuUsersRound /></span>
              <span>Broking Details</span>
            </Button>
          </li>
        </NavLink>

        <li>
          <Button className="w-100">
            <span className="icon"><IoSettingsOutline /></span>
            <span>Setting</span>
          </Button>
        </li>

        <hr />

        <span className="h1">Subscription</span>

        <li>
          <Button className="w-100">
            <span className="icon"><MdOutlineSubscriptions /></span>
            <span>Subscription Details</span>
          </Button>
        </li>

        <li>
          <Button className="w-100">
            <span className="icon"><LuFileBadge /></span>
            <span>My Subscription</span>
          </Button>
        </li>

        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
