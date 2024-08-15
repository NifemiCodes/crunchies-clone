import { useRef, useState } from "react";
import { base } from "../App";
import "../styles/tabbar.css";

const TabBar = () => {
  const [home, setHome] = useState(true);
  const [fav, setFav] = useState(false);
  const [orders, setOrders] = useState(false);
  const [profile, setProfile] = useState(false);
  const marker = useRef<HTMLImageElement>(null);

  const toggleFocus = (homeF: boolean, favF: boolean, ordersF: boolean, profileF: boolean) => {
    setHome(homeF);
    setFav(favF);
    setOrders(ordersF);
    setProfile(profileF);

    homeF ? marker.current?.classList.add("home") : marker.current?.classList.remove("home");
    favF ? marker.current?.classList.add("fav") : marker.current?.classList.remove("fav");
    ordersF ? marker.current?.classList.add("orders") : marker.current?.classList.remove("orders");
    profileF ? marker.current?.classList.add("profile") : marker.current?.classList.remove("profile");
  };

  return (
    <div className="tabbar-container">
      <div className="icons-container">
        <div className="icons-subcontainer">
          <div onClick={() => toggleFocus(true, false, false, false)}>
            <img className="tab-icon" src={`${base}home-${home ? "filled" : "outline"}.png`} alt="home" />
          </div>
          <div onClick={() => toggleFocus(false, true, false, false)}>
            <img className="tab-icon" src={`${base}heart-${fav ? "filled" : "outline"}.png`} alt="favourites" />
          </div>
        </div>

        <div className="middle-icon">
          <div className="bag-icon-container">
            <img className="bag-icon" src={`${base}bag-outline-white.png`} alt="bag icon" />
          </div>
        </div>

        <div className="icons-subcontainer">
          <div onClick={() => toggleFocus(false, false, true, false)}>
            <img className="tab-icon" src={`${base}orders-${orders ? "filled" : "outline"}.png`} alt="orders" />
          </div>
          <div onClick={() => toggleFocus(false, false, false, true)}>
            <img className="tab-icon" src={`${base}profile-${profile ? "filled" : "outline"}.png`} alt="profile" />
          </div>
        </div>
      </div>

      <div className="tab-marker-container">
        <img ref={marker} className="tab-marker-img" src={`${base}tab-marker.png`} alt="tab marker" />
      </div>
    </div>
  );
};
export default TabBar;
