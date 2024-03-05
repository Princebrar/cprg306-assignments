"use client";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import React from "react";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (name,quantity,category) => {
    setItems([...items, { name: name, quantity: quantity, category: category }]);
  };
  const handleItemSelect = (name) => {
    name = name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽️|🧼/g, '');
    name = name.split(",")[0];
    setSelectedItemName(name);
  };
    return (
      <main className=" bg-slate-950 text-white flex flex-col px-4 py-2">
        <div className="flex flex-row">
        <div>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName}/>
        </div>
        </div>
      </main>
    );
  }