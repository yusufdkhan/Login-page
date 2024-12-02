import Home from "./components/home";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import Report from "./components/report";
import { ThemeProvider, useTheme } from "../context/themeContext";

const App = () => {
  const { mode, handleMode } = useTheme();

  // localStorage.setItem("yusuf", "khan");

  // console.log(localStorage.getItem("yusuf"));
  return (
    <div
      style={{
        background: mode === "dark" ? "black" : "red",
      }}
    >
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
export default App;
