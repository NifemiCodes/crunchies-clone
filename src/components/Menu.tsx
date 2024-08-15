import { useState } from "react";
import { base, CardComponent } from "../App";
import Heart from "./Heart";
import "../styles/menu.css";

const MenuItem = ({ image, text, price }: CardComponent) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="menu-item">
      <div className="menu-item-top-container">
        <Heart />
        <img className="menu-item-food-img" src={`${base}${image}`} alt="menu item image" />
      </div>

      <div className="menu-item-bottom-container">
        <p className="text">{text}</p>
        <p className="price">{price}</p>
        {count > 0 ? (
          <div className="added-div">
            <button className="minus-btn" onClick={decrement}>
              <img src={`${base}minus-icon.png`} alt="minus icon" />
            </button>

            <p> {count} in bag </p>

            <button className="plus-btn" onClick={increment}>
              <img src={`${base}plus-icon.png`} alt="plus icon" />
            </button>
          </div>
        ) : (
          <button className="add-btn" onClick={increment}>
            Add to bag
          </button>
        )}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="row">
        <MenuItem image="brown-rice.png" text="Fried Brown Rice" price="₦5,000" />
        <MenuItem image="veggie-delight.png" text="Veggie Delight CheeseSteak" price="₦3,200" />
      </div>
      <div className="row">
        <MenuItem image="chicken-burger.png" text="Chicken burger first delivery" price="₦5,000" />
        <MenuItem image="chicken-wrap.png" text="Crunchies's Chicken wrap" price="₦5,000" />
      </div>
    </div>
  );
};
export default Menu;
