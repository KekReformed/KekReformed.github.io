import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample';
import BuyMenu from "./Components/BuyMenu.jsx"
import Upgrade from "./Components/UpgradeClass.js"
 
function App() {

  const [cheeseProduction, setCheeseProduction] = React.useState(0)
  const [cheeseCount, setCheeseCount] = React.useState(0)
  const [clickMultiplier, setClickMultiplier] = React.useState(1)
  const [upgradeList, setUpgradeList] = React.useState(()=>{
    let cheeseMaker = new Upgrade("Cheese Maker","Hire an artisan cheese maker",1,50,1.15,0)
    let cheeseFarm = new Upgrade("Cheese Farm","Buy a cattle farm to produce cheese",5,350,1.15,0)
    let cheesePlantation = new Upgrade("Cheese Plantation","Buy a plantation and grow the cheese from the soil itself",10,1000,1.15,0)
    let cheeseFactory = new Upgrade("Cheese Factory","Buy a factory, dedicated to producing nothing but cheese",25,2500,1.15,0)
    let cheeseCity = new Upgrade("Cheese City","Buy a city and it inhabitants, using them as slave labour for your cheese empire",225,20000,1.15,0)
    let cheeseMachine= new Upgrade("Cheese Machine","A 100% ethical machine that can directly transform organic matter into cheese",1250,100000,1.15,0)
    let cheeseCountry = new Upgrade("Cheese Country","Conquer a whole nation and use its economic resources to produce more cheese",50000,10000000,1.15,0)
    let cheesePlanet = new Upgrade("Cheese Planet","Create an entire new planet filled with cows for cheese production",2000000,500000000,1.15,0)
    let cheeseGenocide = new Upgrade("Cheese Genocide",`"Get the cheese machines, the cheese must flow."`,10000000,5000000000,1.15,0)

    return [cheeseMaker,cheeseFarm,cheesePlantation,cheeseFactory,cheeseCity,cheeseMachine,cheeseCountry,cheesePlanet,cheeseGenocide]
  })

  
  React.useEffect(()=>{
    if(localStorage.getItem("upgradeList")){
      setUpgradeList(JSON.parse(localStorage.getItem("upgradeList")))
      setCheeseProduction(Number(localStorage.getItem("cheeseProduction")))
      setCheeseCount(Number(localStorage.getItem("cheeseCount")))
    }
  },[])


  return (
    <div className="App">
      <div id="line"/>
      <div id="horizontal-line"/>
      <CounterExample 
      upgradeList={upgradeList}
      cheeseProduction={cheeseProduction} setCheeseProduction={setCheeseProduction} 
      cheeseCount={cheeseCount} setCheeseCount={setCheeseCount}
      clickMultiplier={clickMultiplier} setClickMultiplier={setClickMultiplier}
      />

      <BuyMenu 
      upgradeList={upgradeList}
      cheeseProduction={cheeseProduction} setCheeseProduction={setCheeseProduction} 
      cheeseCount={cheeseCount} setCheeseCount={setCheeseCount}
      clickMultiplier={clickMultiplier} setClickMultiplier={setClickMultiplier}
      />
    </div>
  );
}

export default App;