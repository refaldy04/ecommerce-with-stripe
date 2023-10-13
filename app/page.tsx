import { Urbanist } from "next/font/google";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export default function Home() {
  return (
    <main className={`${urbanist.variable} font-sans`}>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </main>
  );
}
