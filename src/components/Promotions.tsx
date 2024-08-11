import { useEffect, useState } from "react";
import "../styles/promotions.css";

const Promotions = () => {
  const img1 = "ofada-banner.png";
  const img2 = "burger-banner.png";
  const [bannerImage, setBannerImage] = useState<string>(img1);

  useEffect(() => {
    let id = setTimeout(() => setBannerImage((prev) => (prev === img1 ? img2 : img1)), 10000);

    return () => clearTimeout(id);
  }, [bannerImage]);

  return (
    <div className="promotions-container">
      {/* top row */}
      <div className="promotions--top-div">
        <img src={`${import.meta.env.BASE_URL}${bannerImage}`} alt="banner image" />
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
