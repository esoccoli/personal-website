import React from "react";
import "../css/namebox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Namebox: React.FC = () => {
    return (
        <div className="namebox">
            <img className="myimg" src="./img/ella.png" />
            <h1 className="name">Ella Soccoli</h1>
        </div>
    )
}

export default Namebox;
