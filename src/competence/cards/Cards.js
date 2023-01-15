import React from 'react'
import Sscard from '../sscard/Sscard'
import './Cards.css'

const Cards = ({liste, champ, }) => {
  return (
    <div className='test'>
      {liste.map(el=>
        <Sscard  key={el.id} el={el} champ={champ}/>
      )}
      
    
    </div>
  )
}

export default Cards