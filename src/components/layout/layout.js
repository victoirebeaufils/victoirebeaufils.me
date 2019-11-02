import React from 'react';
import Header from '../header';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.css';
import './layout.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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