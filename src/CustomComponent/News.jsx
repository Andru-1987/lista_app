import React, { useEffect, useState } from "react";
import style from '../CustomComponent/CompoNewsModuleCSS/newsDisplay.module.css';
import MainItem from '../CustomComponent/CompoNews/MainItem'
import ItemNews from '../CustomComponent/CompoNews/ItemNews'






const options={
    method:'GET',
    headers:{
        // "X-Api-Key": process.env.REACT_APP_KEY_API,
        "X-Api-Key":'1662d5d08e494198ae67c2906922804f',
        "Access-Control-Allow-Origin" : "*" ,
    }
}



function News({dataQuery,dataNews}){
    let data=require('../dataSource/data.json');
    
    const [news,setNews]=useState(data.articles);
    const [item,setItem]=useState(data.articles[0]);
    const [newsIdx,setNewsIdx]=useState(2);
    
    
    // URL DEFAULT
    let URL='';
  
    if(dataNews.news==='everything'){
        URL=`${process.env.REACT_APP_URLBASE}v2/${dataNews.news}?q=${dataQuery}&from=${dataNews.dates.from}&to=${dataNews.dates.to}&language=${dataNews.language}`
    }else{
        URL=`${process.env.REACT_APP_URLBASE}v2/${dataNews.news}?q=${dataQuery}&country=${dataNews.country}&category=${dataNews.category}`
    }


    const getData=async (URL)=>{
        try{
            const response=await fetch(URL,options);

            if(!response.ok){
                throw {
                    error:true,
                    status:response.status,
                    statusText:!response.statusText?'Ocurrió un error':response.statusText,
                }
            };
            setNews(await response.json());
        }
        catch(e){
        console.log(e)        
        }
    }



    // useEffect(()=>{
    //     // console.log(news);
    //     // console.log(URL);
    //     // // getData(URL);
    //     // console.log(news);
    // },[dataQuery])

    

    return (

        <div className={style.newsContainer}>
            <MainItem item={item}/>
            <div className={style.mainPreview}>
                {news.map((item,index)=>(<ItemNews key={index} 
                item={item} setItem={setItem} 
                newsIdx={newsIdx} setNewsIdx={setNewsIdx} index={index}
                />))}
            </div>
        </div>
    )
}


export default News;









