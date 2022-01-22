import logo from './cat.png';
import './App.css';
import styled from "styled-components"
import React, { useState} from 'react';
import Clock from './CustomComponent/Clock';

const Main=styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

const GetNews=styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`

function App() {

  const [hover,setHover]=useState(true);

  return (
    <div className="App">
      
        <div className='trans'>
          <img src={logo} className="App-logo" alt="logo" />
          <Clock/>
          <div onMouseEnter={()=>setHover(prev=>!prev)}>
          {hover?
              <p>
                私はアンダーソンです-最初のデプロイ
              </p>:<p>I'm Anderson - First Deploy</p>
          }
          </div>
        </div>
          <Main>
            hello
          </Main>
          <GetNews>

          </GetNews>
    </div>
  );
}

export default App;
