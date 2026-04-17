import React from 'react';
import { NavLink } from 'react-router';
import { FaHome,  FaClock, FaChartBar } from "react-icons/fa";

const Nabver = () => {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src="/public/logo.png" alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-semibold gap-4">
      <li><NavLink className={({isActive}) => isActive? "  bg-green-800 text-white" : ""} to={"/"}> <FaHome></FaHome> Home</NavLink></li>
      <li><NavLink className={({isActive}) => isActive? " bg-green-800 text-white" : ""} to={"/Timeline"}> <FaClock></FaClock> Timeline</NavLink></li>
      <li><NavLink className={({isActive}) => isActive? " bg-green-800 text-white" : ""} to={"/Status"}> <FaChartBar></FaChartBar> Stats</NavLink></li>
      
      
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Nabver;