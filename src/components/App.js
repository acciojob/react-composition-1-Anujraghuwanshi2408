
import React from "react";
import './../styles/App.css';
import Tab from './Tabs'

let tabs = [
  {title:"Tab1" , content:"Tab1"},
  {title:"Tab2" , content:"Tab2"},
  {title:"Tab3" , content:"Tab3"}]
const App = () => {
  return (
    <div> 
        {/* Do not remove the main div */}
        <Tab tabs = {tabs} />
    </div>
  )
}

export default App
