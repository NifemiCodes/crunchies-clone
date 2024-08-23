import { base } from "../App";
import "../styles/location.css";

const Location = () => {
  return (
    <div className="location-container">
      {/* icon and text div */}
      <div className="sub-container">
        <img className="location-icon" src={`${base}location-icon.png`} alt="location icon" />

        <div className="location-text">
          <h2>Current location</h2>
          <p>3 Ajayi Street Lekki Phase 1 Lagos</p>
        </div>
      </div>

      {/* arrow icon */}
      <img className="arrow-icon" src={`${base}arrow-icon.png`} alt="arrow icon" />
    </div>
  );
};
export default Location;
