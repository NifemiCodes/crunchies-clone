import { base } from "../App";
import "../styles/categories.css";

interface CategoryCard {
  image: string;
  text: string;
}

const Category = ({ image, text }: CategoryCard) => {
  return (
    <div className="category-card">
      <img src={`${base}${image}`} alt="category icon" />
      <p>{text}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="categories-container">
      <Category image="burger-icon.png" text="All Food" />
      <Category image="pizza-icon.png" text="Pizza" />
      <Category image="cookie-icon.png" text="Cookies" />
      <Category image="pastry-icon.png" text="pastry" />
      <Category image="burger-icon.png" text="Cakes" />
      <Category image="pizza-icon.png" text="Sweets" />
      <Category image="cookie-icon.png" text="French Cuisine" />
      <Category image="pastry-icon.png" text="Italian" />
    </div>
  );
};
export default Categories;
