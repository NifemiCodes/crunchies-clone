import "../styles/crunchies.css";
import { base } from "../App";
import Heart from "./Heart";

interface Product {
  image: string;
  text: string;
  price: string;
  showBadge: boolean;
}

const Product = ({ image, text, price, showBadge }: Product) => {
  return (
    <div className="product">
      <div className="product-top">
        <img className="product-food-img" src={`${base}${image}`} alt="product image" />
        {showBadge ? <img className="badge" src={`${base}hot-deal.png`} alt="hot deal badge" /> : null}
        <Heart />
      </div>

      <div className="product-bottom">
        <p className="product-name">{text}</p>

        <div>
          <p className="product-price">{price}</p>
          <div className="delivery">
            <img src={`${base}truck-icon.png`} alt="truck icon" />
            <p>Free delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Crunchies = () => {
  return (
    <div className="crunchies-container">
      <p className="crunchies-title">All in Crunchies</p>

      <div className="products-container">
        <Product image="heavens-food.png" text="The Heaven's Food" price="₦32,000" showBadge={true} />
        <Product image="sauce.png" text="Veggie Delight Cheesesteak" price="₦8,000" showBadge={false} />
      </div>
    </div>
  );
};
export default Crunchies;
