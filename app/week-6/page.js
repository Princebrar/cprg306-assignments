"use client";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import React from "react";
import { useState } from "react";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (name,quantity,category) => {
    setItems([...items, { name: name, quantity: quantity, category: category }]);
  };
    return (
      <main className=" bg-slate-950 text-white flex flex-col px-4 py-2">
        <div>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items}/>
        </div>
      </main>
    );
  }