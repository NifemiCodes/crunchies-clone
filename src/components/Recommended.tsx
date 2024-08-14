import "../styles/recommended.css";
import { base, CardComponent } from "../App";

const RecDish = ({ image, text, price }: CardComponent) => {
  return (
    <div className="rec-dish">
      <div className="rec-dish-left">
        <img src={`${base}${image}`} alt="dish image" />
      </div>

      <div className="rec-dish-right">
        <p className="rec-dish-name">{text}</p>
        <p className="rec-dish-price">{price}</p>
        <p className="rec-dish-discount">30% Off upto 60</p>
      </div>
    </div>
  );
};

const Recommended = () => {
  return (
    <div className="recommended-container">
      <p className="rec-title">Recommended</p>
      <div className="rec-dish-container">
        <RecDish image="deccan.png" text="Deccan Queen R..." price="₦5,000" />
        <RecDish image="tiffins.png" text="Mamoo's Tiffins" price="₦23,700" />
        <RecDish image="deccan.png" text="Deccan Queen R..." price="₦5,000" />
        <RecDish image="tiffins.png" text="Mamoo's Tiffins" price="₦23,700" />
        <RecDish image="deccan.png" text="Deccan Queen R..." price="₦5,000" />
        <RecDish image="tiffins.png" text="Mamoo's Tiffins" price="₦23,700" />
      </div>
    </div>
  );
};
export default Recommended;
