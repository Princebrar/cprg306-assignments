"use client";
import React from "react";
import { useState } from "react";
import Item from "./item";
export default function ItemList({ items },{onItemSelect}){
  const [sortBy, setSortBy] = useState("name");
  const items_copy = items.map((item) => {
    return { ...item };
  });
  if(sortBy == "name"){
    items_copy.sort((a, b) => a.name.localeCompare(b.name));}
  else if(sortBy == "category"){
    items_copy.sort((a, b) => {
      const categoryComparison = a.category.localeCompare(b.category);
      if (categoryComparison === 0) {
        return a.name.localeCompare(b.name);
      }
      else{
        return categoryComparison;
      }
      
    });
  }
  else if(sortBy == "group_list"){
    items_copy.sort((a, b) => {
      const categoryComparison = a.category.localeCompare(b.category);
      if (categoryComparison === 0) {
        return a.name.localeCompare(b.name);
      }
      else{
        return categoryComparison;
      };
    }
    );
  }
  let wow = 1;
  return (
    <div>
      <div className="px-2">
        <text className="text">Sort by:</text>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out active:outline-none active:ring-2 active:ring-orange-400 active:ring-opacity-75 ${sortBy == "name" ? "bg-orange-500" : "bg-orange-700"}`} value="name" onClick={(value1) => { setSortBy(value1.target.value); }}>Name</button>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out active:outline-none active:ring-2 active:ring-orange-400 active:ring-opacity-75 ${sortBy == "category" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value2) => { setSortBy(value2.target.value); }} value="category">Category</button>
        <button className={` p-1 m-2 w-28 hover:scale-110 duration-300 ease-out active:outline-none active:ring-2 active:ring-orange-400 active:ring-opacity-75 ${sortBy == "group_list" ? "bg-orange-500" : "bg-orange-700"}`} onClick={(value3) => { setSortBy(value3.target.value); }} value="group_list">Grouped Category</button>
      </div>
      <ul className="px-2">
        <>
        {sortBy != "group_list" ? items_copy.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
        )) : items_copy.map((item, index) => (
          <>
          {item.category == items_copy[wow].category ? "" : <h2 className="text-xl">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>}
          <span className="hidden">{wow = index}</span>
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} /></>
        ))}
        </>
      </ul>
    </div>
  );
}