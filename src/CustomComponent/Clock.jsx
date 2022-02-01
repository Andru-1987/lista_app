import React from "react";
import useClock from "../Hooks/useClock";
import styled from "styled-components"

const ClockFrame=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100&family=Noto+Sans+JP:wght@100&family=Rampart+One&display=swap');
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    font-family: 'Josefin Slab', serif;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Rampart One', cursive;
    cursor:pointer;
    font-size:3rem;

    @media (max-width:800px){
        
        font-size:2rem;
      }
      
`


const Clock=()=>{

    const [time,show,displayClock]=useClock();

    return (
        <>
            
                <ClockFrame onClick={displayClock}>
                    {show? <p>
                        {time}
                        </p>
                         : "Click me: I'm hidden Clock ≧☉_☉≦"}
                 </ClockFrame>
            

        </>
    )
 }

 export default Clock;