import logo from './cat.png';
import './App.css';
import styled from "styled-components"
import React from 'react';
import Clock from './CustomComponent/Clock';
import HeadLines from './CustomComponent/HeadLines';
import HoverText from './CustomComponent/HoverText';

const Main=styled.div`
  
  display:flex;
  align-items:center;
  margin:10px;
  padding:0px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const GetNews=styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  display:grid;
  grid-column:span 2;
  align-items: center;
`

function App() {
  return (
    <div className="App">
        <div className='trans'>
          <img src={logo} className="App-logo" alt="logo" />
            <div>
              <HoverText/>
            </div>
        </div>
          <Main>
            <Clock/>
          </Main>
          <GetNews>
           <HeadLines/>
          </GetNews>
    </div>
  );
}

export default App;
