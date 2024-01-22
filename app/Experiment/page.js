import Link from "next/link";

export default function Home() {
  const weekDemos = [1];
  const doneUpTo = 100;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Experiments</h1>
        <div className="text-lg">
          <ul>
            {weekDemos.map((week) => (
              <li key={week} className="hover:text-green-400 hover:underline">
                <Link href={`./Experiment/Experiment-${week}`}>Experiment No. {week}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
