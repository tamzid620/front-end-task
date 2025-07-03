import React from 'react';
import Navbar from '../user/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../user/shared/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;