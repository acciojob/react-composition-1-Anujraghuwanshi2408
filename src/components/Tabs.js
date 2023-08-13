// import { functionsIn } from "cypress/types/lodash";
import React , {useState} from "react";


const Tab = ({tabs}) => {
    console.log(tabs)
 const [tabClicked  , setTabClicked] = useState("")

    function handleClick(value){
       setTabClicked(value)
    }
    return(
        <div> 
            <h1> heloo</h1>  
            <ul>
                {
                    tabs.map((value) =>
                        <li onClick={()=>handleClick(value.title)}>{value.content}</li>
                
                )
                }
            </ul>
              {
                 tabClicked && <p>This is the content for {tabClicked}</p>
              }
        </div>
    )
}

export default Tab