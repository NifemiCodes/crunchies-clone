import { useEffect, useRef, useState } from "react";
import { base } from "../App";
import "../styles/tabbar.css";

const TabBar = () => {
  const [home, setHome] = useState(true);
  const [fav, setFav] = useState(false);
  const [orders, setOrders] = useState(false);
  const [profile, setProfile] = useState(false);

  const homeIcon = useRef<HTMLImageElement>(null);
  const favIcon = useRef<HTMLImageElement>(null);
  const ordersIcon = useRef<HTMLImageElement>(null);
  const profileIcon = useRef<HTMLImageElement>(null);
  const marker = useRef<HTMLImageElement>(null);

  const toggleFocus = (homeF: boolean, favF: boolean, ordersF: boolean, profileF: boolean) => {
    setHome(homeF);
    setFav(favF);
    setOrders(ordersF);
    setProfile(profileF);

    // to move the tab marker
    if (homeF) {
      const values = homeIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.style.setProperty("left", `${values.x - values.width / 2}px`);
      }
    }

    if (favF) {
      const values = favIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.style.setProperty("left", `${values.x - values.width / 2}px`);
      }
    }

    if (ordersF) {
      const values = ordersIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.style.setProperty("left", `${values.x - values.width / 2}px`);
      }
    }

    if (profileF) {
      const values = profileIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.style.setProperty("left", `${values.x - values.width / 2}px`);
      }
    }
  };

  useEffect(() => {
    toggleFocus(true, false, false, false);
  }, []);

  return (
    <div className="tabbar-container">
      <div className="icons-container">
        <div className="icons-subcontainer">
          <div onClick={() => toggleFocus(true, false, false, false)}>
            <img ref={homeIcon} className="tab-icon" src={`${base}home-${home ? "filled" : "outline"}.png`} alt="home" />
          </div>

          <div onClick={() => toggleFocus(false, true, false, false)}>
            <img ref={favIcon} className="tab-icon" src={`${base}heart-${fav ? "filled" : "outline"}.png`} alt="favourites" />
          </div>
        </div>

        <div className="middle-icon">
          <div className="bag-icon-container">
            <img className="bag-icon" src={`${base}bag-outline-white.png`} alt="bag icon" />
          </div>
        </div>

        <div className="icons-subcontainer">
          <div onClick={() => toggleFocus(false, false, true, false)}>
            <img ref={ordersIcon} className="tab-icon" src={`${base}orders-${orders ? "filled" : "outline"}.png`} alt="orders" />
          </div>
          <div onClick={() => toggleFocus(false, false, false, true)}>
            <img ref={profileIcon} className="tab-icon" src={`${base}profile-${profile ? "filled" : "outline"}.png`} alt="profile" />
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
