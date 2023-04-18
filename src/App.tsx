import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative font-raleway ">
      <Background />
      <div className="bg-[rgba(4,6,20,0.85)] flex flex-col justify-between backdrop-blur-md h-[100vh]">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}

export default App;
