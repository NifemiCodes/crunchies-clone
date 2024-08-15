import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import Promotions from "./components/Promotions";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import HotDeals from "./components/HotDeals";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import Crunchies from "./components/Crunchies";
import TabBar from "./components/TabBar";

export const base = import.meta.env.BASE_URL;
export interface CardComponent {
  image: string;
  text: string;
  price: string;
}

function App() {
  return (
    <>
      <div className="unavailable">
        <p>Oops, this page can't be viewed on large screens. Try opening it on your mobile device instead!</p>
      </div>
      <div className="wrapper">
        <TabBar />
        <Header />
        <Location />
        <Promotions />
        <Categories />
        <Menu />
        <HotDeals />
        <Trending />
        <Recommended />
        <Crunchies />
      </div>
    </>
  );
}

export default App;
