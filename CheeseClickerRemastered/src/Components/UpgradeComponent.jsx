import { useState, useRef } from 'react';
import './stylesheets/Upgrade.css'
import AugmentsList from './AugmentsList';

const cheeseIcon = require("./images/cheese icon.png")

function UpgradeComponent(props){

    const [buttonClass, setButtonClass] = useState("fade")
    const [upgradeCost, setUpgradeCost] = useState(props.upgrade.cost)
    const [upgradeCount, setUpgradeCount] = useState(props.upgrade.count)

    const upgradeCountRef=useRef(props.upgrade.count)
    const upgradeCostRef=useRef(props.upgrade.cost)

    upgradeCountRef.current=props.upgrade.count
    upgradeCostRef.current=props.upgrade.cost

    function numShorten(num){

        let numString=String(num)
        if(num>=1000000000) return `${numString.slice(0,-9)}.${numString.slice(1,3)}B`
        if(num>=1000000) return `${numString.slice(0,-6)}.${numString.slice(1,3)}M`
        return numString
    }

    function buttonFade(){
        setButtonClass("unfade")
        setTimeout(()=>{setButtonClass("fade")},100);
    }

    function buttonPress(){
        buttonFade()
        if(props.cheeseCount >= upgradeCostRef.current){
            props.setCheeseProduction(props.cheeseProduction+props.upgrade.output)
            props.setCheeseCount(props.cheeseCount-upgradeCostRef.current)
            props.upgrade.cost = Math.round(upgradeCostRef.current*props.upgrade.multiplier)
            setUpgradeCost(Math.round(upgradeCostRef.current*props.upgrade.multiplier))
            setUpgradeCount(upgradeCountRef.current+1)
            props.upgrade.count++
        }
    }

    return(
        <div id="upgrade">
            <p id="upgrade-name">{props.upgrade.name}</p>
            <p id="upgrade-output">{`CPS: ${numShorten(props.upgrade.output)}`}</p>
            <p id="upgrade-count">{upgradeCountRef.current}</p>
            <p id="upgrade-description">{props.upgrade.description}</p>
            <p id="cost">{numShorten(upgradeCostRef.current)}</p>
            <img id="cheese-icon" src={cheeseIcon}/>
            <p id="buy-button" className={buttonClass} onClick={buttonPress}>Buy</p>
        </div>
    )
}

export default UpgradeComponent