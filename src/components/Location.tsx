import "../styles/location.css";

const Location = () => {
  return (
    <div className="location-container">
      {/* icon and text div */}
      <div className="sub-container">
        <div className="location-icon">
          <img src={`${import.meta.env.BASE_URL}public/location-icon.svg`} alt="location icon" />
        </div>

        <div className="location-text">
          <h2>Current location</h2>
          <p>3 Ajayi Street Lekki Phase 1 Lagos</p>
        </div>
      </div>

      {/* arrow icon */}
      <img src={`${import.meta.env.BASE_URL}public/arrow-icon.svg`} alt="arrow icon" />
    </div>
  );
};
export default Location;
