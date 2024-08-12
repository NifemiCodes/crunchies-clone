import "../styles/trending.css";
import { base, CardComponent } from "../App";

const Dish = ({ image, text, price }: CardComponent) => {
  return (
    <div className="dish">
      <div className="dish-left">
        <img src={`${base}${image}`} alt="food dish image" />
      </div>
      <div className="dish-right">
        <p className="dish-name">{text}</p>
        <p className="dish-price">{price}</p>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="trending-container">
      <p className="trending-title">Trending Platters</p>

      <div className="dishes-container">
        <Dish image="grilled-fish.png" text="Grilled fish with spicy onion sauce with black roasted beef" price="₦12,700" />
        <Dish image="fruit-sandwich.png" text="Veggie Delight Cheesesteak Sliced ​​tortillas with grilled meat" price="₦32,000" />
        <Dish image="grilled-fish.png" text="Grilled fish with spicy onion sauce with black roasted beef" price="₦12,700" />
        <Dish image="fruit-sandwich.png" text="Veggie Delight Cheesesteak Sliced ​​tortillas with grilled meat" price="₦32,000" />
      </div>
    </div>
  );
};
export default Trending;
