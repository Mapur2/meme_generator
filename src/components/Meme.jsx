import React, { useState } from 'react'
import memeData from './memedata'
export default function Meme() 
{
    const [memeUrl,setImage]=useState("https://media.tenor.com/RPXO08OJgpMAAAAC/kermit-spinning.gif")
    const [memeTop, setTop]=useState("")
    const [memeBottom,setBottom]=useState("")
    function newImage(params) {
        let i=Math.floor(Math.random() * (99 - 0))
        //console.log(memeData[i].url)
        setTimeout(() => {
          setImage(memeData[i].url)
        }, 1000);
        setImage("https://media.tenor.com/RPXO08OJgpMAAAAC/kermit-spinning.gif")
    }
    function handleChane(event) {
      const {name,value}=event.target
      if(name==='top')
        setTop(value)
      else
        setBottom(value)
    }
  return (
    <main id='meme'>
        <form action="" id='form'>
            <input type="text" 
            className='form-input' 
            placeholder='top text'
            name='top'
            value={memeTop}
            onChange={handleChane}
            
            />

            <input type="text" 
            className='form-input' 
            placeholder='bottom text'
            name='bottom'
            value={memeBottom}
            onChange={handleChane}
            />

            <br />
        </form>
        <button onClick={newImage} type="button" id='form-button'>Get a new image</button>
        
        <div id='topText'> {memeTop}</div>
        <img src={memeUrl} alt="" />
        <div  id='bottomText'>{memeBottom}</div>
    </main>
  )
}

