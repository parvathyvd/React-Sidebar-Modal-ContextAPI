import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const {sidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`${sidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img className="logo" src={logo} />
        <button className="btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link)=>{
          const {id,url,text,icon} = link;
          return(<li key={id}>
            <a href={url}>{icon} {text}</a>
          </li>)
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
