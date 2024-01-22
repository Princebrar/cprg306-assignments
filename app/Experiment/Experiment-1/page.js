"use client"
console.log("Jatt life");
export default function Page() {
    return (
      <main className=" min-h-screen">
        <h1>Experiment-1</h1>
        <h1>Farm items</h1>
        <p>Here are some items you can find on a farm:</p>
        <ol type='A'>
            <li>{Farmitems.name} whose age is {Farmitems.age} and its colour is {Farmitems.color} and its address is {Farmitems.address.no} {Farmitems.address.street} {Farmitems.address.city}</li>
        </ol>
      </main>
    );
  }

  const Farmitems = {
    name : "Tractor",
    age:1,
    color:"red",
    address:{no:5,street:"main street",city:"New York"},
  };