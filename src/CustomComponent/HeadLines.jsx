import React, {useState} from "react";
import HeaderNews from './HeaderNews';
import HeadLineFilter from './HeadLineFilter';
import styles from "../ModuleCSS/headLines.module.css";
import {initData} from "../dataSource/dataSrc";
import News from "./News";




function HeadLines(){

    
    // Query de lo que se filtrará como dato de las news
    const [dataQuery,setDataQuery]=useState('');
    // Filtros
    const [dataNews,setDataNews]=useState(initData);



    return (
            <div className={styles.container}>
                <div className={styles.headerInput}>
                    {/* EL input del filtro de la query */}
                    <HeaderNews setDataQuery={setDataQuery}/>
                </div>
                <div className={styles.divisor}>
                    {/* filtro de data adicional */}
                    <HeadLineFilter dataNews={dataNews} setDataNews={setDataNews}/>
                </div>
                <div className={styles.divNews}>
                    {/* Donde se van a mostrar los resultados */}
                    <News dataNews={dataNews} dataQuery={dataQuery}/>
                </div>
            </div>
    )
}

export default HeadLines;

