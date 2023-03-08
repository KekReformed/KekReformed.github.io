import { useEffect, useRef } from "react";
import ClickMultiplier from "./ClickMultiplier"
import UpgradeComponent from "./UpgradeComponent";
import './stylesheets/UpgradeList.css'

function UpgradeList(props){
    let jsxList = []
    if(props.mode === "upgrades"){
        jsxList=[

            <ClickMultiplier 
            cheeseCount={props.cheeseCount} setCheeseCount={props.setCheeseCount}
            clickMultiplier={props.clickMultiplier} setClickMultiplier={props.setClickMultiplier}/>,
    
            
        ]
        props.upgradeList.forEach(element => {
            jsxList.push(
                <UpgradeComponent
                upgrade={element}
                cheeseCount={props.cheeseCount} setCheeseCount={props.setCheeseCount}
                cheeseProduction={props.cheeseProduction} setCheeseProduction={props.setCheeseProduction} 
                />)
        });   
    }

    const currentCheeseProduction=useRef(props.cheeseProduction)
    currentCheeseProduction.current=props.cheeseProduction

    useEffect(()=>{
        const interval=setInterval(()=>{
            props.setCheeseCount((cheeseCount)=>{;return cheeseCount+currentCheeseProduction.current;})
        }, 1000);
        return () => clearInterval(interval);

    },[]);

    return(
        <div id="upgrade-list-container">
          {jsxList}  
        </div>
    )
}

export default UpgradeList