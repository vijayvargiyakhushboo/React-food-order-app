import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';



const Header = () => {
    return (
        <div className="header">
            <div >
             <img className="logo" src="https://www.logodesign.net/logo/slice-of-cake-with-cherry-2703ld.png" />
            </div>
            <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);