import React,{useState} from "react";


function HoverText(){
    const [hover,setHover]=useState(true);
    

    return ( <div  onMouseEnter={()=>setHover(prev=>!prev)}>
        {hover?
            <p>
              私はアンダーソンです-最初のデプロイ
            </p>:<p>I'm Anderson - First Deploy</p>
        }
    </div>
    )
}

export default HoverText;