import React from 'react'
import './Comp.css'



const Comp = ({level}) => {
    
  return (
    <div className='body'>
        <div className='level'>
            <h1>{level.titre}</h1>
            <h5>{level.compet1 }</h5>
            <div className='css'>
                <input type="range" id="" name="CSS"
                   min="0" max="11"></input>
                   
             </div>
             <h5>{level.compet2 }</h5>
            <div className='html'>
                <input type="range" id="" name="HTML"
                   min="0" max="11"></input>
                   
             </div>
             <h5>{level.compet3 }</h5>
            <div className='git'>
                <input type="range" id="" name="GIT"
                   min="0" max="11"></input>
                   
             </div>
             <h5>{level.compet4 }</h5>
            <div className='dom'>
                <input type="range" id="" name="DOM"
                   min="0" max="11"></input>
                   
             </div>
             <h5>{level.compet5 }</h5>
            <div>
                <input type="range" id="" name="react js"
                   min="0" max="11"></input>
                   
             </div>
           
        </div>
        <div className='photo'>
        <img src="ismail photo1.jpg" alt="ismailphoto" className='img'/>
        </div>
    </div>
  )
}

export default Comp