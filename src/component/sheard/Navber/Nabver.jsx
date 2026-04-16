import React from 'react';
import { NavLink } from 'react-router';

const Nabver = () => {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Keen<span className='text-green-800'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-semibold gap-5">
      <li><NavLink className={({isActive}) => isActive? "  bg-green-800 text-white" : ""} to={"/"}>Home</NavLink></li>
      <li><NavLink className={({isActive}) => isActive? " bg-green-800 text-white" : ""} to={"/Timeline"}>Timeline</NavLink></li>
      <li><NavLink className={({isActive}) => isActive? " bg-green-800 text-white" : ""} to={"/Status"}>Stats</NavLink></li>
      
      
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Nabver;