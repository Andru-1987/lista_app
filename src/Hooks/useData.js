import {useEffect, useState} from 'react';

const options={
    method:'GET',
    headers:{
        "X-Api-Key": process.env.REACT_APP_KEY_API,
        "Access-Control-Allow-Origin" : "*" ,
    }
}


function useData(URL){
    const [fetchData,setFetchData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    

    const getData=async (URL)=>{
        try{
            const response=await fetch(URL,options)
            if(!response.ok){
                throw {
                    error:true,
                    status:response.status,
                    statusText:!response.statusText?'Ocurrió un error':response.statusText,
                }
            }
            const data=await response.json();
            setFetchData(data);
            setIsPending(false);
            setError({error:false})
        }
        catch(error){
            setIsPending(true)
            setError(error);
        }
    }

    useEffect(()=>{
        getData(URL)
    },[])
    

    return {fetchData:fetchData,isPending:isPending,error:error}
}


export default useData;