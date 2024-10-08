import { base, CardComponent } from "../App";
import "../styles/hotdeals.css";

const DealCard = ({ image, text, price }: CardComponent) => {
  return (
    <div className="deal-card">
      <div className="deal-info">
        <div className="top-container">
          <p>{text}</p>
          <img src={`${base}heart-full.png`} alt="heart" />
        </div>

        <div className="price-container">
          <img src={`${base}tiny-naira.png`} alt="naira" />
          <p>{price}</p>
        </div>
      </div>

      <img className="deal-image" src={`${base}${image}`} alt="hot deal image" />
    </div>
  );
};

const HotDeals = () => {
  return (
    <div className="hotdeals-container">
      <div className="title-container">
        <p>Hot Deals 🔥</p>
        <a className="link" href="#">
          See All
        </a>
      </div>

      <div className="card-container">
        <DealCard image="pancakes.png" text="Viral stacking cake with honey" price="9,670" />
        <DealCard image="roast-beef.png" text="Roast beef with black pepper" price="8,000" />
        <DealCard image="pancakes.png" text="Viral stacking cake with honey" price="9,670" />
        <DealCard image="roast-beef.png" text="Roast beef with black pepper" price="8,000" />
        <DealCard image="pancakes.png" text="Viral stacking cake with honey" price="9,670" />
        <DealCard image="roast-beef.png" text="Roast beef with black pepper" price="8,000" />
      </div>
    </div>
  );
};
export default HotDeals;
