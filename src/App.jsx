import "./styles.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};
