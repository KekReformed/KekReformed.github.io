import { useState, useRef } from 'react';
import './stylesheets/Augment.css'

const cheeseIcon = require("./images/cheese icon.png")

function AugmentComponent(props){

    const [buttonClass, setButtonClass] = useState("fade")

    function buttonFade(){
        setButtonClass("unfade")
        setTimeout(()=>{setButtonClass("fade")},100);
    }

    function buttonPress(){
        buttonFade()
    }

    return(
        <div id="augment">
            <p id="augment-name">{props.upgrade.name}</p>
            <p id="augment-description">{props.upgrade.description}</p>
            <p id="cost">{numShorten(upgradeCostRef.current)}</p>
            <img id="cheese-icon" src={cheeseIcon}/>
            <p id="buy-button" className={buttonClass} onClick={buttonPress}>Buy</p>
        </div>
    )
}

export default UpgradeComponent