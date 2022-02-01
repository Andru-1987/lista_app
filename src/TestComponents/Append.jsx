import React, { useCallback, useState } from 'react';
import List from './List';

function Append(){
const [number,setNumber]=useState(1)
const [dark,setDark]=useState(false);

const theme={
    backgroundColor:dark?'#333':'white',
    color:dark?'white':'#333'
}

const getItems=useCallback(()=>{
    return [number,number+1,number+2]
},[number])

    return (<>
    
        <div style={theme}>
            <input 
                type="number"
                value={number}
                onChange={e=>{setNumber(Number(e.target.value))}}
            />
            <button
                onClick={()=>setDark(prevDark=>!prevDark)}
            >
                Set theme
            </button>
            <List getItems={getItems}/>
        </div>

    </>)
}

export default Append;