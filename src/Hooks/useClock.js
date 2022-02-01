
import { useEffect, useState } from "react";

const useClock=()=>{

    const [time,setTime]=useState(new Date().toLocaleTimeString());
    const [show,setShow]=useState(false);

    const timeSetter=()=>{
        setTime(new Date().toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(()=>timeSetter(),1000);
        return ()=>{
            clearInterval(timeSetter());
        }
    })

    const displayClock=()=>{
        setShow(prevState=>!prevState);

    };
  

    return  [time,show,displayClock]
}
export default useClock;