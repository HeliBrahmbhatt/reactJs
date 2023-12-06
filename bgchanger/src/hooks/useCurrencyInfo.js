import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`).then((res)=>{
            console.log('res ==========>',JSON.stringify(res));
        
        }).then((res)=>{
           
        })
    },[currency])

    return data
}


export default useCurrencyInfo