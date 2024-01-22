import { useState } from "react";
import TopToolbar from "./components/TopToolbar";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProductsScreen from "./components/ProductsScreen";
import ContactScreen from "./components/ContactScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  const handleToolbarClick = (buttonId) => {
    setActiveScreen(buttonId);
  };
  
  return (
    <div className="max-h-screen overflow-y-scroll">
      <TopToolbar onToolbarButtonClick={handleToolbarClick} />
      {activeScreen === "home" && <HomeScreen />}
      {activeScreen === "about" && <AboutScreen />}
      {activeScreen === "products" && <ProductsScreen />}
      {activeScreen === "contact" && <ContactScreen />}
    </div>
  );
}
