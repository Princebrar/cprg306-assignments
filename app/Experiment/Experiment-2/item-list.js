"use client";
import React, { useState } from "react";
import Item from "./item"; // Importing the Item component
import itemsData from "./item.json"; // Importing the items from the JSON file

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name"); // useState hook for sorting preference
  const [items, setItems] = useState(itemsData); // useState hook for managing items state

  // Function to handle sorting based on sortBy state
  const handleSort = () => {
    // Sorting the items array based on the sortBy state variable
    setItems([...items].sort((a, b) => {
      if (sortBy == "name") {
        return a.name.localeCompare(b.name); // Sorting by name
      } else if (sortBy == "category") {
        return a.category.localeCompare(b.category); // Sorting by category
      }
      return 0;
    }));
  };

  // Function to handle changing sortBy to "name"
  const handleSortByName = () => {
    setSortBy("name");
    handleSort();
  };

  // Function to handle changing sortBy to "category"
  const handleSortByCategory = () => {
    setSortBy("category");
    handleSort();
  };

  return (
    <div className="container px-3" style={{ width: "30%" }}>
      {/* Sorting preference buttons */}
      <div>
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy == "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortBy == "category" ? "lightblue" : "white" }}
        >
          Sort by Category
        </button>
      </div>

      {/* Sorting preference selector */}
      <div>
        <label htmlFor="sortBy">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ul className="w-auto">
        {/* Using map function to create Item component for each item in the items array */}
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;