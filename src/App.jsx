import { useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProductsScreen from "./components/ProductsScreen";
import ContactScreen from "./components/ContactScreen";
import Footer from './components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  const handleToolbarClick = (buttonId) => {
    setActiveScreen(buttonId);
  };
  
  return (
    <div className="max-h-screen overflow-y-scroll">
      <Header onToolbarButtonClick={handleToolbarClick} />
      {activeScreen === "home" && <HomeScreen />}
      {activeScreen === "about" && <AboutScreen />}
      {activeScreen === "products" && <ProductsScreen />}
      {activeScreen === "contact" && <ContactScreen />}
      <Footer />
    </div>
  );
}
