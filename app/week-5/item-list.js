"use client";
import React from "react";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";
export default function ItemList(){
  const [sortBy, setSortBy] = useState("name");
  if(sortBy == "name"){
    items.sort((a, b) => a.name.localeCompare(b.name));}
  else if(sortBy == "category"){
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  else if(sortBy == "group_list"){
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  let wow = 1;
  return (
    <div>
      <div className="px-2">
        <label htmlFor="sort">Sort by:</label>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "name" ? "bg-orange-500" : "bg-orange-700"}`} value="name" onClick={(value1) => { setSortBy(value1.target.value); }}>Name</button>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "category" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value2) => { setSortBy(value2.target.value); }} value="category">Category</button>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out ${sortBy == "group_list" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value3) => { setSortBy(value3.target.value); }} value="group_list">Grouped Category</button>
      </div>
      <ul>
        <>
      
        {sortBy != "group_list" ? items.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
        )) : items.map((item, index) => (
          <>
          {item.category == items[wow].category ? "" : <h2 className="text-xl">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>}
          <span className="hidden">{wow = index}</span>
          <Item key={index-1} name={item.name} quantity={item.quantity} category={item.category} /></>
        ))}
        </>
      </ul>
    </div>
  );
}