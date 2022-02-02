import {useEffect, useState} from 'react';

const options={
    method:'GET',
    headers:{
        // "X-Api-Key":'1662d5d08e494198ae67c2906922804f'
        "X-Api-Key": process.env.REACT_APP_KEY_API,
        "Access-Control-Allow-Origin" : "*" ,
    }
}


function useData(URL){
    const [fetchData,setFetchData]=useState(null);
 
    const getData=async (URL)=>{

        let data={};
        
        try{
            const response=await fetch(URL,options);

            if(!response.ok){
                throw {
                    error:true,
                    status:response.status,
                    statusText:!response.statusText?'Ocurrió un error':response.statusText,
                }
            }

            data=await response.json();
            setFetchData(data);
        
        }
        catch(error){
            console.log(error);
        }
    
        return data;
    };


    useEffect(()=>{
        getData(URL);

    },[URL])


    return fetchData;
}


export default useData;