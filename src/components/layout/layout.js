import React from 'react';
import Header from '../header';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.css';
import Popper from 'popper.js';
import './layout.css';
function Layout (props){
    return (
        <div>
            <Header />
            <div class="container">
            {props.children}
            </div>
            <Footer/>
            </div>
       
    )
}
export default Layout;