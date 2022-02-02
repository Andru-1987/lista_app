import React, { useEffect } from "react";
import style from '../CompoNewsModuleCSS/newsDisplay.module.css';


const theme={
    width:'100%',
    heigth:'200px'
}


function MainItem({item}){
    let cat='./cat.png';
    
    return(
        
        <div className={style.mainSimple}>
            <h2>{item.title}</h2>
            <div>
            <img src={item.urlToImage===null ||''?cat:item.urlToImage} alt={item.name} style={theme}/>
            <p style={{fontSize:'0.7rem'}}>By {item.author} → Date:{item.publishedAt.match(/.+?(?=T)/g)}</p>
            </div>
            <p>{item.content}</p>
            <a href={item.url}> Read More →</a>
        </div>  
    )
}

export default MainItem;