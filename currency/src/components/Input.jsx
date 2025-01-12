// component should be in uppercase
import React, { useId } from 'react'

// The component is customizable with props (settings) provided when using it.
// useID

function InputBox({
    // it takes input from user
    label,
    // passin from or to
    amount,
    // amunt want to display 
    onAmountChange,
    // this will be method
    onCurrencyChange,
    CurrencyOptions=[],
    // that will be passed in array 
    selectCurremcy="usd",
    amountDisable=false,
    currencyDisable=false,
    
    
    // user wants it own css can be done here
    className = "",
}) {
   const amountInputId= useId()
// unique will get 
    return (
        // if user want its own css he can use ${classname}
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                {/* label is vaiable it gets value from label */}

                {/* INPUT BOX SECTION */}

                    {label}
                </label>
                <input
                    // when there are many values 
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    // how to use this onchange so that component ko sab pata chale
                    // from component we pass event
                    // from that event we can call method (onAmountCHange)
                    // it will crash if onAmount bychance its not passed so we are using &&
                    // checker it checks whether its exits or not 
                    // most of the time event value it take in string formate so wrap them with number 
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurremcy}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* thinking to loop this option  */}
                       {CurrencyOptions.map((currency)=>(
                        // loops in key is important for performance 
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                       ))}

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


// Instead of hardcoding values, we pass props to make the component flexible and reusable.
// callback =>  "Hey, when this happens, please run this function for me."
//  function you pass as an argument to another function
// A callback function lets you handle events like clicks, typing, or selections and decide what to do next.
// The component (like your InputBox) doesn't know what to do with the data. It only provides a way to send it back to the parent using a callback. The parent decides what to do with the value.
// Data flows from parent to child, and callbacks allow the child to "inform" the parent when something happens.
// we bring all the files to inddex.js iin component 