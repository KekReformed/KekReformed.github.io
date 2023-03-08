import { useState } from "react";
import "./stylesheets/AugmentsList.css"
import Augment from "./Augment.jsx"

const cheeseIcon = require("./images/cheese icon.png")

function AugmentsList(props){

    const [buttonClass, setButtonClass] = useState("fade unfade")
    const [buttonId, setButtonId] = useState("augments-list-container-closed")
    const [hiddenStatus, setHiddenStatus] = useState("hidden")
    const [closed, setClosed] = useState(true)

    function buttonFade(){
        setButtonClass("unfade")
        setTimeout(()=>{setButtonClass("fade")},100);
    }

    function buttonPress(){
        buttonFade()
        buttonResize(closed)
    }

    function buttonResize(){
        if(closed===true){
            setButtonId("augments-list-container-open")
            setHiddenStatus("visible")
        }
        else{
            setButtonId("augments-list-container-closed")
            setHiddenStatus("hidden")
        }
        setClosed(!closed)
    }

    const jsxList=[
        <Augment
        name="Cheese Maker"
        description="Makes 1 cheese per second"
        output={1}
        cost={50}
        multiplier={1.15} 
        cheeseCount={props.cheeseCount} setCheeseCount={props.setCheeseCount}
        cheeseProduction={props.cheeseProduction} setCheeseProduction={props.setCheeseProduction} 
        />
    ]

    return(
        <div id={buttonId} class={buttonClass} onClick={buttonPress}>
          <p id="augments-title">Augments</p>
          <div className={hiddenStatus}>{jsxList}</div>
        </div>
    )
}

export default AugmentsList

