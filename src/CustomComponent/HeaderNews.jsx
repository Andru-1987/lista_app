import React  from "react";
import styles from '../ModuleCSS/headerNews.module.css'


function HeaderNews({setDataQuery}){
    
    // Manejador del input data
    const handlerInput=(e)=>{
        if(e.key==='Enter'){
            let inputData=e.target.value!==''?(e.target.value).trim():'';
            setDataQuery(inputData);
            e.target.value='';
            }
    }


    return(
            <input className={styles.searchInput} type="text" placeholder="Info to search + Enter key" maxLength={500} onKeyPress={handlerInput}/>
    )
}

export default HeaderNews;