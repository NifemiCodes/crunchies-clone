import { useState } from "react";
import "../styles/menu.css";
interface MenuItem {
  image: string;
  text: string;
  price: string;
}

const Naira = "₦";

const MenuItem = ({ image, text, price }: MenuItem) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="menu-item">
      <div className="top-container">
        <img className="heart-icon" src={`${import.meta.env.BASE_URL}heart-icon.png`} alt="heart-icon" />
        <img className="food-img" src={`${import.meta.env.BASE_URL}${image}`} alt="menu item image" />
      </div>
      <div className="bottom-container">
        <p className="text">{text}</p>
        <p className="price">
          {Naira}
          {price}
        </p>
        {count > 0 ? (
          <div className="added-div">
            <button className="minus-btn" onClick={decrement}>
              <img src={`${import.meta.env.BASE_URL}minus-icon.png`} alt="minus icon" />
            </button>
            <p> {count} in bag </p>
            <button className="plus-btn" onClick={increment}>
              <img src={`${import.meta.env.BASE_URL}plus-icon.png`} alt="plus icon" />
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
      <MenuItem image="brown-rice.png" text="Fried Brown Rice" price="5,000" />
      <MenuItem image="veggie-delight.png" text="Veggie Delight CheeseSteak" price="3,200" />
      <MenuItem image="chicken-burger.png" text="Chicken burger first delivery" price="5,000" />
      <MenuItem image="chicken-wrap.png" text="Crunchies's Chicken wrap" price="5,000" />
    </div>
  );
};
export default Menu;
