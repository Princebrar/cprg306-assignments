import ".././globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Week 5 - Shopping List App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"className=" bg-slate-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
