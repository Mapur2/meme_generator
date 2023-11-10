import React, { useState } from 'react'
import memeData from './memedata'
export default function Meme() 
{
    const [memeUrl,setImage]=useState("https://media.tenor.com/RPXO08OJgpMAAAAC/kermit-spinning.gif")
    function newImage(params) {
        let i=Math.floor(Math.random() * (99 - 0))
        //console.log(memeData[i].url)
        setTimeout(() => {
          setImage(memeData[i].url)
        }, 1000);
        setImage("https://media.tenor.com/RPXO08OJgpMAAAAC/kermit-spinning.gif")
        console.log(displayImage)
    }
    
  return (
    <main id='meme'>
        <form action="" id='form'>
            <input type="text" className='form-input' placeholder='top text'/>
            <input type="text" className='form-input' placeholder='bottom text'/><br />
        </form>
        <button onClick={newImage} type="button" id='form-button'>Get a new image</button>
        <img src={memeUrl} alt="" />
    </main>
  )
}

