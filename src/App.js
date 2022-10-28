import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";
import "./../src/darkMode.css";
import { FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <FaMoon className="mx-5 border-rounded" onClick={toggleTheme} />

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
