import React from 'react';

const DishesServed = ({props}) => {
return (
    
    <>
        
       {props.map((CurEle) => {
        //destructuring
        const {id, name, category, description, price} = CurEle;
        return (
            <div className="menu-card" key={id}>
            <h4 className="menu-heading">
            {name}
            </h4>
            <p className="menu-description">{category}</p>
            <p className="menu-description">
            {CurEle.description}<span className="menu-highlight">{price}</span>
            </p>
        </div>
        )
       })}


</>
)

}

export default DishesServed;