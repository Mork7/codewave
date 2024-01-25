import { useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import ContactScreen from "./components/ContactScreen";
import Footer from './components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  const handleToolbarClick = (buttonId) => {
    setActiveScreen(buttonId);
  };
  
  return (
    <main className="max-h-screen overflow-y-scroll">
      <Header onToolbarButtonClick={handleToolbarClick} />
      {activeScreen === "home" && <HomeScreen onPastProjectsClick={handleToolbarClick}/>}
      {activeScreen === "about" && <AboutScreen />}
      {activeScreen === "projects" && <ProjectsScreen />}
      {activeScreen === "contact" && <ContactScreen />}
      <Footer />
    </main>
  );
}
