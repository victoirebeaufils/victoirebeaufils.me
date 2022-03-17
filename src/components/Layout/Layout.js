import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import './Layout.css'

const Layout = props => {
    return (
        <div class="layout">
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;