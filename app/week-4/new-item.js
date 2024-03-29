"use client";
import React from "react";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const item = (name, quantity, category) => {
    return name + ", Quantity: " + quantity + ", Category: " + category;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Added item: " + item(name, quantity, category));
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full min-h-fit">
      <div className="mb-2">
        <input type="text" placeholder="Item Name" value={name} onChange={(event) => setName(event.target.value)} className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" required/>
      </div>
        <div className="flex justify-between">
            <input type="number" placeholder="Quantity" className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={quantity} onChange={(event) => setQuantity(event.target.value)} />

            <select value={category} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" onChange={(event) => setCategory(event.target.value)}>
                <option value="" disabled>Category</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="forzen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>

            </select>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
    </form>
  );
}