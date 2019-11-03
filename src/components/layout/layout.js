import React from 'react';
import Header from '../header';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm
import 'popper.js' // importing this worked like a charm as well
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