import React from "react";
import useClock from "../Hooks/useClock";
import styled from "styled-components"

const ClockFrame=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100&family=Noto+Sans+JP:wght@100&family=Rampart+One&display=swap');
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:100%;
    font-family: 'Josefin Slab', serif;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Rampart One', cursive;
    cursor:pointer;
    font-size:1rem;

    @media (max-width:800px){
        font-size:1rem;
      }
      
`

const h2Style={
    margin:'0',
    pading:'0'
}

const Clock=()=>{

    const [time,show,displayClock]=useClock();

    return (
        <>
            
                <ClockFrame onClick={displayClock}>
                    <h2 style={h2Style}> Here we have some News</h2>
                    {show? <p>
                        {time}
                        </p>
                         : "Click me: I'm hidden Clock ≧☉_☉≦"}
                 </ClockFrame>
            

        </>
    )
 }

 export default Clock;