import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';


import './Layout.css'

const Layout = props => {
    return (
        <div class="">
            <Navbar/>
            <div class="container">
            {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;