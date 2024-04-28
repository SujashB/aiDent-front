import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Stats />
      <Footer />
    </div>
  );
}
