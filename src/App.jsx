import ProfileCard from "./components/ProfileCard";
import girl from "./assets/girl.svg";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("clicked");
  };
  return (
    <div
      className={`${
        isDarkMode ? "bg-white" : "bg-[#1A1B21]"
      } flex justify-center items-center min-h-screen`}>
      <ProfileCard
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        img={girl}
        name="Laura Smith"
        profession="Frontend Developer"
        website="laurasmith.website"></ProfileCard>
    </div>
  );
}

export default App;
