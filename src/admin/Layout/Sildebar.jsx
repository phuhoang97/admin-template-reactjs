import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsBoxArrowLeft,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id='sidebar' className={"sidebar-responsive"}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon'>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to={"/"}>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to={"/manager-product"}>
            <BsFillArchiveFill className='icon' /> Manager Product
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to={"/manager-user"}>
            <BsPeopleFill className='icon' /> Manager User
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to={"/manager-category"}>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </Link>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href=''>
            <BsBoxArrowLeft className='icon' /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
