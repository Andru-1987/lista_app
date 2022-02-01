import React from "react";
import style from '../CompoNewsModuleCSS/newsDisplay.module.css';


const theme={
    width:'100%',
    heigth:'200px'
}


function MainItem({item}){
    console.log(item)

    return(
        <div className={style.mainSimple}>
            <h2>{item.title}</h2>
            <div>
            <img src={item.urlToImage} alt={item.name} style={theme}/>
            <p style={{fontSize:'0.7rem'}}>By {item.author} → Date:{(item.publishedAt.split('T')[0])}</p>
            </div>
            <p>{item.content}</p>
            <a href={item.url}> Read  →</a>
        </div>
    )
}

export default MainItem;