import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
    return (
        <header className=" text-white p-3 d-flex justify-content-between align-items-center"style={{backgroundColor:"#da2c2c"}}>
            <div className="d-flex align-items-center">
             
            </div>
            <nav>
            <h1 className="m-0 fs-4"style={{color:"white"}}>Achievers Academy</h1>
            </nav>
        </header>
    );
};

export default Header;
