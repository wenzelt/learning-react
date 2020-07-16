import React from "react";
import {
    Link
} from "react-router-dom";


function NavigationMenu(props){
    return( <div>

                    <ul>
                        <li>
                            <Link
                                to="/" className="text-blue-500 py-3 px-3 border-t  border-b block"
                                onClick={
                                    props.closeMenu
                                }>Home</Link>
                        </li>

                        <li>
                            <Link
                                to="/about" className="text-blue-500 py-3 px-3 border-b block"
                                onClick={
                                    props.closeMenu
                                }>About</Link>
                        </li>
                         <li>
                            <Link
                                to="/contact-us" className="text-blue-500 py-3 px-3  border-b block"
                                onClick={
                                    props.closeMenu
                                }>Contact Us</Link>
                        </li>

                    </ul></div>
)}
                    export default NavigationMenu