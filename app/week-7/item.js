"use client";
import React from 'react';

const Item = ({ name, quantity, category ,onSelect}) => {
    return (
        <li className="p-2 m-4 bg-slate-900 max-w-sm hover:scale-110 duration-300 ease-out" onClick={()=>{onSelect(name)}}>
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="text-sm">Buy {quantity} in {category}</div>
        </li>
    );
};

export default Item;
