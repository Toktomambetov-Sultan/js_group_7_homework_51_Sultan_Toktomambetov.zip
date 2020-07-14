import React from "react";
import "./../App.css"
function Coin(props){
    return (
        <li className="coin">
            {props.children}
        </li>
    )
}
export default Coin