import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  AiOutlineDashboard,
} from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsersRound, LuStore, LuFileBadge } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { MyContext } from "../../App";

const Sidebar = () => {
  const context = useContext(MyContext);
  const isCollapsed = context.isTogglesidebar;
 

  return (
    <div className="sidebar">
      <ul>
        <span className="h1">Algo Products</span>

        <NavLink to="/strategy" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><LuStore /></span>
              <span className="icon-text">Strategy</span>
            </Button>
          </li>
        </NavLink>

        <hr />

        <span className="h1">Algo Execution & Analytics</span>

        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><AiOutlineDashboard /></span>
              <span className="icon-text">Dashboard</span>
            </Button>
          </li>
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><FaRegChartBar /></span>
              <span className="icon-text">My Portfolio</span>
            </Button>
          </li>
        </NavLink>


 <NavLink to="/report" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
                <Button className="w-100">
                  <span className="icon"><TbReportSearch  /></span>
                  <span className="icon-text">Live Report</span>
                  < FaChevronDown className=""/>
                </Button>
              </NavLink>

        <hr />

        <span className="h1">Setup</span>

        <NavLink to="/broking" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><LuUsersRound /></span>
              <span className="icon-text">Broking Details</span>
            </Button>
          </li>
        </NavLink>

        <NavLink to="/setting" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><IoSettingsOutline /></span>
              <span className="icon-text">Setting</span>
            </Button>
          </li>
        </NavLink>

        <hr />

        <span className="h1">Subscription</span>

        <NavLink to="/subscription" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><MdOutlineSubscriptions /></span>
              <span className="icon-text">Subscription Details</span>
            </Button>
          </li>
        </NavLink>

        <NavLink to="/mysub" className={({ isActive }) => isActive ? "nav-active" : ""} style={{ textDecoration: 'none' }}>
          <li>
            <Button className="w-100">
              <span className="icon"><LuFileBadge /></span>
              <span className="icon-text">My Subscription</span>
            </Button>
          </li>
        </NavLink>

        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
