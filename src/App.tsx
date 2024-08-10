import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import Promotions from "./components/Promotions";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Location />
      <Promotions />
    </div>
  );
}

export default App;
