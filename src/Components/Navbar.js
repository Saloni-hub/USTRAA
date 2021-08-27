import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light mt-2" style={{boxShadow:'10px 5px 10px #000'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="icon">
                <a className="navbar-brand" style={{letterSpacing:'3px' ,color:'rgb(65, 161, 224)',fontWeight:'bold'}} href="#">USTRAA</a>
                <p>GROMING FOR MEN</p>
                </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Beard <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hair Growth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hair Oil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Face Wash</a>
                </li>
                </ul>
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <div className="mr-2" style={{height:'50px',padding:'0.4rem'}}>
                <i className="fas fa-cart-plus "></i>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
