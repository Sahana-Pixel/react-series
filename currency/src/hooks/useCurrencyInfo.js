// jsx dont put it 
//  it purely return js
// this can also use built in hook 
// hooks default name use ...


import { useState, useEffect } from 'react'

function useCurrencyInfo (currency){
    // data is holded in data
    // empty object is added 
    const [data,setData]=useState({})
    // when this hook load i want to call the api
    // invoke hook when trigger  -> useeffect 
    // from this method api call 
    // this has one callback {} and dependies (anything changes in dependies again api calls) 
    useEffect(() => {
      console.log("Currency passed to hook:", currency);

      console.log("useEffect triggered with currency:", currency);
        // call api
        // string in api that has to be converted too json 
        // inr key it has data now how to handle this
        // if {} then we have return 
        // A callback is used to handle what should happen when the data is ready (like displaying the weather).
        // from this callback we get response converted to json 
        // data 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
    //    to acces the object we can use . or []
       .then((res) => setData(res[currency]))
       
       .catch(error => console.error(error))
    }, [currency])
    // when there is change is currency this is called 
console.log(data)
console.log("Current data in state:", data);
  return data  
}
// this mehthod returns
export default useCurrencyInfo
