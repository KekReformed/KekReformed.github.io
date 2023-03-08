import { useState } from 'react';
import './stylesheets/Upgrade.css'

const cheeseIcon = require("./images/cheese icon.png")

function ClickMultiplier(props){

    const [buttonClass, setButtonClass] = useState("fade")
    const [clickMultiplierCost, setClickMultiplierCost] = useState(35)
    const [clickMultiplierCount, setClickMultiplierCount] = useState(1)

    function buttonFade(){
        setButtonClass("unfade")
        setTimeout(()=>{setButtonClass("fade")},100);
    }

    function buttonPress(){
        buttonFade()
        if(props.cheeseCount >= clickMultiplierCost && clickMultiplierCount<5){
            props.setCheeseCount(props.cheeseCount-clickMultiplierCost)
            props.setClickMultiplier(props.clickMultiplier+1)
            setClickMultiplierCost(Math.round(clickMultiplierCost*1.35))
            setClickMultiplierCount(clickMultiplierCount+1)
        }
    }
    let clickMultiplierCountDisplay=clickMultiplierCount
    
    if(clickMultiplierCount===5){
        clickMultiplierCountDisplay=`MAX`
        document.getElementById("upgrade-count").style.color="red"
    }

    return(
        <div id="upgrade">
            <p id="upgrade-name">Click Multiplier</p>
            <p id="upgrade-count">{clickMultiplierCountDisplay}</p>
            <p id="upgrade-description">Increases cheese gained on click</p>
            <p id="cost">{clickMultiplierCost}</p>
            <img id="cheese-icon" src={cheeseIcon}/>
            <p id="buy-button" className={buttonClass} onClick={buttonPress}>Buy</p>
        </div>
    )
}
export default ClickMultiplier