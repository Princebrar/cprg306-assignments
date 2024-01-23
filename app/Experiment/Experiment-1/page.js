
import ItemList from "./item-list";
import Item from "./item";

export default function Page() {
    return (
      <main className=" bg-slate-950 text-white flex flex-col">
        <div>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <ul>
        {ItemList.map((jatt,index) => (
        <Item key={index} name={jatt.name} quantity={jatt.quantity} category={jatt.category} />
      ))}
        </ul>
        </div>
      </main>
    );
  }