import React, {useRef} from "react";


const Referencias=()=>{
    let refMenuBtn=useRef();
    let refMenu=useRef();

    const handleToggle=()=>{


        if (refMenuBtn.current.innerText==='Menu'){
            refMenuBtn.current.innerText='Close';
            refMenu.current.style.display='block';

        } else {
            refMenuBtn.current.innerText='Menu';
            refMenu.current.style.display='none';
        }
    };
    
    return (
        <>
            <div> referencias </div>
            <button ref={refMenuBtn} onClick={handleToggle}> Menu </button>
            <nav ref={refMenu} style={{display:"none"}}>
                <a href="/#">Section 1</a><br />
                <a href="/#">Section 2</a><br />
                <a href="/#">Section 3</a><br />
                <a href="/#">Section 4</a><br />
            </nav>
        </>
    )
}

export default Referencias;