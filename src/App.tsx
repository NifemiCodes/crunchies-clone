import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import Promotions from "./components/Promotions";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import HotDeals from "./components/HotDeals";

export const base = import.meta.env.BASE_URL;

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Location />
      <Promotions />
      <Categories />
      <Menu />
      <HotDeals />
    </div>
  );
}

export default App;
