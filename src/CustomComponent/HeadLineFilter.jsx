import React from "react";
import styled from "styled-components";
import * as data from "../dataSource/dataSrc.js";


// Componentes Customizados

const Sector=styled.div`
    display:flex;
    justify-content:flex-start;
    flex-flow:column;
    align-items:left;
    text-align:left;
    padding:5px;
    margin:5px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    

    select,input,label{
        font-size:15px;
        text-align:left;
        margin:5px;
        padding:5px;
        border:none;
    }

    input{
        width:150px;
    }
`

const SectorDate=styled(Sector)`
    text-align:left;
    display:flex;
    
    input{
        outline:none;
        border:1px solid black;
    }

`


const FilterWrapper=styled.div`
    text-font: 10px;
    width:100%;
    display:flex;
    flex-flow:column;
`

// ----------------------------------------------------------------
// para hacer mapeo de opciones y seleccionadores
const {optionCategory,optionCountry,optionHead,lang}=data;


function  HeadLineFilter({setDataNews,dataNews}){
    
    // manejadores del cambio
    const onChangeHandler=(e)=>{
        let newObj={};

        if (e.target.name==='from' || e.target.name==='to'){
            newObj.dates={
                from:e.target.value,
                to:dataNews.dates.to
            }
            
        } else{
            let key=e.target.name;
            let value=e.target.value;
            newObj={[`${key}`]:value}
        
        }

        let merge={...dataNews,...newObj};
        setDataNews(merge);
    }

    
    return (<FilterWrapper>
        
        <SectorDate >
            {dataNews.language!=='en'?<label>Desde</label>:<label>From</label>}    
            <input type="date" name="from" defaultValue={dataNews.dates.from} onChange={onChangeHandler} />
            {dataNews.language!=='en'?<label>Hasta</label>:<label>To</label>}
            <input readOnly type="date" name="to" defaultValue={dataNews.dates.to} onChange={onChangeHandler}/>
        </SectorDate>

        <Sector>
            {dataNews.language!=='en'?<label>Noticias</label>:<label>News</label>} 
            <select name="news" defaultValue={dataNews.news} onChange={onChangeHandler}>
                {optionHead.map((item,index)=>{
                    return (<option key={index}value={item.value}>{item.label}</option>)
                })}
            </select>
        </Sector>

        <Sector>
            {dataNews.language!=='en'?<label>País</label>:<label>Country</label>}
            <select name="country" defaultValue={dataNews.country} onChange={onChangeHandler}>
            {optionCountry.map((item,index)=>{
               return (<option key={index}value={item.value}>{item.label}</option>)
            })}
            </select>
        </Sector>

        <Sector>
            {dataNews.language!=='en'?<label>Idioma</label>:<label>Language</label>}
            <select name="language" defaultValue={dataNews.language} onChange={onChangeHandler}>
            {lang.map((item,index)=>{
               return (<option key={index}value={item.value}>{item.label}</option>)
            })}
            </select>
        </Sector>

        <Sector>
            {dataNews.language!=='en'?<label>Categoría</label>:<label>Category</label>} 
            <select name="category" defaultValue={dataNews.category} onChange={onChangeHandler}>
                {optionCategory.map((item,index)=>{
                    return (<option key={index}value={item.value}>{item.label}</option>)
                })}
            </select>
        </Sector>        
    </FilterWrapper>)
}

export default HeadLineFilter;