import { useState } from "react";
import { base } from "../App";
import "../styles/heart.css";

const Heart = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    liked ? setLiked(false) : setLiked(true);
  };
  return liked ? (
    <img onClick={toggleLike} className="heart-icon heart-full" src={`${base}heart-full.png`} alt="heart icon" />
  ) : (
    <img onClick={toggleLike} className="heart-icon heart-empty" src={`${base}heart-icon.png`} alt="heart-icon" />
  );
};
export default Heart;
