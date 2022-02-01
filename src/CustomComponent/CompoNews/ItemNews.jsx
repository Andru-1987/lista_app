import React, { useState } from "react";
import style from '../CompoNewsModuleCSS/newsDisplay.module.css';
import checkUrlToImage from "../scketch-Ander";

const previewTheme={
    width:' 100%',
    boxSizing:'border-box',
}

function ItemNews({item,setItem,newsIdx,setNewsIdx,index}){
    const cat='./cat.png';

    const clickHandler=()=>{
        setItem(item);
        setNewsIdx(index);
    }
    

    return (
            
                <div id='divChild'
                className={style.item} 
                onClick={clickHandler} 
                style={newsIdx===index?{backgroundColor:'#22223b', color:'#f2e9e4'}:{}}
                >
                    <img src={item.urlToImage!==''?item.urlToImage:cat} alt={item.name}  style={previewTheme}/>
                    <div>
                    <h2>
                        <a href={item.url} target="_blank" > {item.title} </a>
                    </h2>
                    <p>{item.description}</p>
                    </div>
                </div>
            
    )
}


export default ItemNews;