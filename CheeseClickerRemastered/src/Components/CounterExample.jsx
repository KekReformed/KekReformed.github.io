import { useEffect, useState, useRef } from "react"
import './stylesheets/CounterExample.css';

const cheeseIcon = require("./images/cheese icon.png")
let cheeseMade=0

function CounterExample(props){

    const [cheeseComponentClass, setCheeseComponentClass] = useState("fade")
    const [cheeseOutput, setCheeseOutput] = useState(0)
    
    const currentCheeseProduction=useRef(props.cheeseProduction)
    const cheeseCount=useRef(props.cheeseCount)
    const upgradeList=useRef(props.upgradeList)

    currentCheeseProduction.current=props.cheeseProduction
    upgradeList.current=props.upgradeList
    cheeseCount.current=props.cheeseCount

    function buttonPress(){
        setCheeseComponentClass("unfade")
        props.setCheeseCount(props.cheeseCount+1*props.clickMultiplier)
        setTimeout(()=>{setCheeseComponentClass("fade")},100);
        cheeseMade+=props.clickMultiplier
    }

    //Converts cheese count to be display as millions
    function numShorten(num){

        let numString=String(num)
        
        if(num>=1000000000) return `${numString.slice(0,-9)}.${numString.slice(1,3)}B`
        if(num>=1000000) return `${numString.slice(0,-6)}.${numString.slice(1,3)}M`
        return numString
    }

    //What to do every 2 seconds
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCheeseOutput(()=>{
                const cheeseOutput=currentCheeseProduction.current+cheeseMade
                return cheeseOutput
            })
            localStorage.setItem("upgradeList",JSON.stringify(upgradeList.current))
            localStorage.setItem("cheeseCount",cheeseCount.current)
            localStorage.setItem("cheeseProduction",currentCheeseProduction.current)
            cheeseMade=0
        }, 1000);
        return () => clearInterval(interval);
        
    },[]);


    //Actual component were returning
    return(
        <div id="cheese-component">
            <div><p id="cheese-count">{numShorten(props.cheeseCount)+ " Cheese"} </p></div>
            <img id="cheese-button" className={cheeseComponentClass} src={cheeseIcon} onClick={buttonPress}></img>
            <p id="cheese-output">{numShorten(cheeseOutput)+" Cheese per second"}</p>
        </div>
    )
}

export default CounterExample