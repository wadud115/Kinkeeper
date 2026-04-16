import React from 'react';
import Nabver from '../component/sheard/Navber/Nabver';
import Footer from '../component/sheard/Footer/Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>

            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;