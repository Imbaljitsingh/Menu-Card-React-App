import "./style.css";
import MenuCardFoods from './menuAPI';
import { useState } from "react";
import DishesServed from './dishes';
import Navbar from './navbar';

//component to fetch just the catagory from my API
const UniqueList = [...new Set(MenuCardFoods.map((data) => {
    return data.category;
}))]
console.log(UniqueList);
//components 

const FoodMenu = () =>
{   const [menuData, setmenuData] = useState(MenuCardFoods);
    const [navList, setNavList] = useState(UniqueList);
    //filter componet

const FilterMeals = (category) => {

    const updatedList = MenuCardFoods.filter( (FoodItem) => {
      return FoodItem.category === category;
    })
    setmenuData(updatedList);
  
  }
  
    
    return(
        
        <div>
        <Navbar FilterMeals={FilterMeals} navList={navList}/>
        <DishesServed props={menuData} />
        </div>
    )
}


export default FoodMenu;