import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data =useLoaderData()
    // to render we need state 
    // const [data, setData]=useState({}) 
    // useEffect(() =>{

    //     fetch('https://api.github.com/users/Sahana-Pixel')
    //      .then(response => response.json())
    //      .then(data => {
    //         console.log(data)
    //         setData(data)
    //         // now we got data
    //         // from data how to get values  
    //      })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-3 text-3xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git image " />

    </div>
  )
}

export default Github

export const githubLoader = async() => {
    const response = await fetch('https://api.github.com/users/Sahana-Pixel')
    return response.json()
}

// outlet nesting can be done 