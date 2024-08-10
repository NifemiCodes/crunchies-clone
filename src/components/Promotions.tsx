import "../styles/promotions.css";

const Promotions = () => {
  return (
    <div className="promotions-container">
      {/* top row */}
      <div className="promotions--top-div">
        <img src={`${import.meta.env.BASE_URL}ofada-banner.png`} alt="banner image" />
      </div>

      {/* bottom row */}
      <div className="promotions--bottom-div">
        <div>
          <img src={`${import.meta.env.BASE_URL}offer-1.png`} alt="offer" />
        </div>
        <div>
          <img src={`${import.meta.env.BASE_URL}offer-2.png`} alt="offer" />
        </div>
        <div>
          <img src={`${import.meta.env.BASE_URL}offer-3.png`} alt="offer" />
        </div>
      </div>
    </div>
  );
};
export default Promotions;
