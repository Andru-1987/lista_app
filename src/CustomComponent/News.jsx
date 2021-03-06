import React, { useState,useEffect } from "react";
import style from '../CustomComponent/CompoNewsModuleCSS/newsDisplay.module.css';
import MainItem from '../CustomComponent/CompoNews/MainItem';
import ItemNews from '../CustomComponent/CompoNews/ItemNews';




function News({dataQuery,dataNews}){
    let URL;
    if(dataNews.news==='everything'){
        URL=`${process.env.REACT_APP_URLBASE}v2/${dataNews.news}?q=${dataQuery}&from=${dataNews.dates.from}&to=${dataNews.dates.to}&language=${dataNews.language}&apiKey=${process.env.REACT_APP_KEY_API}`
    }else{
        URL=`${process.env.REACT_APP_URLBASE}v2/${dataNews.news}?q=${dataQuery}&country=${dataNews.country}&category=${dataNews.category}&apiKey=${process.env.REACT_APP_KEY_API}`
    }
  
    
    const [news,setNews]=useState(null);
    const [item,setItem]=useState(null);
    const [newsIdx,setNewsIdx]=useState(-1);
    


    useEffect(()=>{

        
        const getData=async (URL)=>{

            let data={};
            
            try{
                const response=await fetch(URL);
    
                if(!response.ok){
                    throw {
                        error:true,
                        status:response.status,
                        statusText:!response.statusText?'Ocurrió un error':response.statusText,
                    }
                }
    
                data=await response.json();
                setNews(data.articles);
            }
            catch(error){
                console.log(error);
            }
        
        };

        getData(URL);
        

    },[dataQuery]);
    

    const imageStyle={
        width:'100%',
        hight:'100%'
    }



    return (

        <div className={style.newsContainer}>
            {item===null?
            <div>
            <img src={'../cat.png'} style={imageStyle}/>
            <h2>No News selected</h2>
            </div>
            
            :<MainItem item={item}/>}
            <div className={style.mainPreview}>
                {news!==null? news.map((item,index)=>(<ItemNews key={index} 
                item={item} setItem={setItem} 
                newsIdx={newsIdx} setNewsIdx={setNewsIdx} index={index}
                />)):<h1>No news yet</h1>}
            </div>
        </div>
    )
}


export default News;









