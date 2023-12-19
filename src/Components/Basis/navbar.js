import React from 'react'

const Navbar = ({FilterMeals, navList}) => {
 return (
  <div>
    
  <nav>
    <div>

      {navList.map( (index) => {
        return (
          <button onClick={ () => FilterMeals(index)}>{index}</button>
        )
      })}     
    </div>
  </nav>







  </div>
 )
}

export default Navbar