import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Home from "./components/menu/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

  const [theme, setTheme] = useState("lofi")

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("business")
    }
  }, [])

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
