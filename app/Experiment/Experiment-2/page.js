import About from "@/Components/about";
import Header from "@/Components/header";
export default function Page() {
    return (
      <main className=" bg-slate-950 text-white flex flex-col min-h-screen">
        <Header></Header>
        <About />
      </main>
    );
  }