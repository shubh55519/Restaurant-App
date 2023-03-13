import MenuCard from "./MenuCard";
import Menu from "./Menudata";
import {useState} from "react";
import Navbar from "./Navbar";


const uniqueList = 
  [
    ...new Set(
    Menu.map((element) =>{
       return element.category;
    })
  ),"All"
]

// console.log(uniqueList);

const Restaurant = () => {
  const [menu, setMenu] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) =>{
    if(category === "All"){
      return setMenu(Menu);
      
    }
    const updatedItem = Menu.filter((element) =>{
      return element.category === category;
    })
    setMenu(updatedItem);
    
  }
  // console.log(filterItem);

    return (
        <div>
          {/* <h2>Restaurant</h2> */}
          <Navbar filterItem={filterItem} menuList={menuList}/>
          <MenuCard menu={menu}/>
        </div>
      );
}
 
export default Restaurant;