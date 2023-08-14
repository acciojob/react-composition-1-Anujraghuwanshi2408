
import React from "react";
import './../styles/App.css';
import Tab from './Tabs'

let tabs = [
  {titles:"Tab1" , contents:"Tab1"},
  {titles:"Tab2" , contents:"Tab2"},
  {titles:"Tab3" , contents:"Tab3"}]
const App = () => {
  return (
    <div> 
        {/* Do not remove the main div */}
        <Tab tabs = {tabs} />
    </div>
  )
}

export default App
