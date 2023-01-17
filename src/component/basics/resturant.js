import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './navbar';

const unquieList = [...new Set(Menu.map((curElem)=>{
return curElem.category;
})),
"All",
]
console.log(unquieList)
const Resturant = () => {
const [menuData,setMenuData]= useState(Menu);
const [menuList,setMenuList]= useState(unquieList);


const filterItem = (category)=>{
  if(category=== "All"){
    setMenuData(Menu);
    return
  }
  const updateList =Menu.filter((curElem)=>{
    return curElem.category === category;
  });
  setMenuData(updateList);
}
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>

     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant

