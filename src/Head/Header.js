import React from 'react'
import './Header.css'

const Header = ({nav}) => {

  return (
    <div>
        
            <div className='navbar'>
                <ul className='ordliste'>
                  <li><a href=""><img src={nav.image} width="150px"/></a></li>   
                  <li><a href="">{nav.cours}</a></li>
                  <li><a href="">{nav.check}</a></li>
                  <li><a href="">{nav.one}</a></li>
                  <li><a href="">{nav.resume}</a></li>   
                </ul>
            </div>

   
   
   </div>
  )
}

export default Header