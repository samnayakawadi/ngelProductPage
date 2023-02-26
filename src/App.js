import { useState } from "react";
import Footer from "./components/footer/Footer";
import Home from "./components/menu/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

  const [theme, setTheme] = useState("lofi")

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
