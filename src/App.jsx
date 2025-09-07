import { useEffect } from "react";
import AppRouter from "./routing/AppRouter";
import { useThemeStore } from "./store/ThemeStore";
import "./main.css";

export default function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <>
      <AppRouter />
    </>
  );
}
