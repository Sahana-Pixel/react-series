import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// the hook we created 
// index file bydefault its called we dont have   to call index.js in component 
function App() {

  const [amount, setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertAmount,setConvertAmount]=useState(0)
  
  // we are passing from which as usd 
  const currencyInfo = useCurrencyInfo(from)
  // this will return data which has key and value and it convert the that to json form then it will return 
  // will get key from that values
  const options=Object.keys(currencyInfo)

  // this is method 
  // What Makes it a Method?
  // It is defined inside the component and works directly with the component’s state.
  const swap=() => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }
  // this is method from this there may be return value that return value return s array 
  // in the array it has functioon adn vraiable 
  // custom hook -> can we do such typeof function

  const convert =()=>{
    setConvertAmount(amount*currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                      // form submit shouldnt go to any url
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            CurrencyOptions={options}
                            onCurrencyChange={(currency)=>
                              setAmount(amount)
                            }
                            onAmountChange={(amount)=>setAmount(amount)}
                            selectCurremcy={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertAmount}
                            CurrencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency) }
                            selectCurremcy={from}
                            amountDisable={true}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>)}

export default App
