import ".././globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Week 2 - Shopping List App",
};

export default function RootLayout({ children }) {
  return (
      <span className={inter.className}>{children}</span>
  );
}
