import { useState } from 'react';
import './stylesheets/Upgrade.css'

const cheeseIcon = require("./images/cheese icon.png")

function Upgrade(props){

    const [buttonClass, setButtonClass] = useState("fade")
    const [upgradeCost, setUpgradeCost] = useState(props.cost)
    const [upgradeCount, setUpgradeCount] = useState(0)
    let upgradeCostDisplay=String(upgradeCost)


    if(upgradeCost>=1000000){
        upgradeCostDisplay=`${upgradeCostDisplay.slice(0,-6)}.${upgradeCostDisplay.slice(1,3)}m`
    }
    else{
        upgradeCostDisplay=upgradeCost
    }
    

    function buttonFade(){
        setButtonClass("unfade")
        setTimeout(()=>{setButtonClass("fade")},100);
    }

    function buttonPress(){
        buttonFade()
        if(props.cheeseCount >= upgradeCost){
            props.setCheeseProduction(props.cheeseProduction+props.output)
            props.setCheeseCount(props.cheeseCount-upgradeCost)
            setUpgradeCost(Math.round(upgradeCost*props.multiplier))
            setUpgradeCount(upgradeCount+1)
        }
    }

    return(
        <div id="augment">
            <p id="augment-name">{props.name}</p>
            <p id="augment-count">{upgradeCount}</p>
            <p id="augment-description">{props.description}</p>
            <p id="augment-cost">{upgradeCostDisplay}</p>
            <img id="augment-icon" src={cheeseIcon}/>
            <p id="augment-buy-button" className={buttonClass} onClick={buttonPress}>Buy</p>
        </div>
    )
}

export default Upgrade