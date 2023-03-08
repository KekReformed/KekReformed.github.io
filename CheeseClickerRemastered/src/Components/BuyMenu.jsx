import { useEffect, useRef, useState } from "react";
import UpgradeList from "./UpgradeList";
import './stylesheets/BuyMenu.css'

function BuyMenu(props){

    const [mode, setMode] = useState("upgrades")

    return(
        <div id="buy-menu-container">

            <p id="upgrade-menu-button" className="menu-button" onClick={()=>setMode("upgrades")}>Upgrade Menu</p>
            <p id="augments-menu-button" className="menu-button" onClick={()=>setMode("augments")}>Augments Menu</p>

            <UpgradeList 
            upgradeList={props.upgradeList}
            cheeseProduction={props.cheeseProduction} setCheeseProduction={props.setCheeseProduction} 
            cheeseCount={props.cheeseCount} setCheeseCount={props.setCheeseCount}
            clickMultiplier={props.clickMultiplier} setClickMultiplier={props.setClickMultiplier}
            mode={mode}
            />
        </div>
    )
}

export default BuyMenu