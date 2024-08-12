import { useEffect, useState } from "react";
import "../styles/promotions.css";
import { base } from "../App";

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
        <img src={`${base}${bannerImage}`} alt="banner image" />
      </div>

      {/* bottom row */}
      <div className="promotions--bottom-div">
        <div>
          <img src={`${base}offer-1.png`} alt="offer" />
        </div>
        <div>
          <img src={`${base}offer-2.png`} alt="offer" />
        </div>
        <div>
          <img src={`${base}offer-3.png`} alt="offer" />
        </div>
      </div>
    </div>
  );
};
export default Promotions;
