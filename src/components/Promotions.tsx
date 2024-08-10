import "../styles/promotions.css";
interface OfferInterface {
  text: string;
  image: string;
}

const offersList: OfferInterface[] = [
  { text: "Value Meals made for you", image: "present.png" },
  { text: "Takeout or Dine-in", image: "present.png" },
  { text: "Biggest Offer on big order", image: "present.png" },
];

const Offer = ({ text, image }: OfferInterface) => {
  return (
    <div className="offer-container">
      <div className="offer-images">
        <img src={`${import.meta.env.BASE_URL}public/sparkles.png`} alt="sparkles" />
        <img src={`${import.meta.env.BASE_URL}public/${image}`} alt="graphic" />
      </div>

      <div className="offer-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Promotions = () => {
  return (
    <div className="promotions-container">
      {/* top row */}
      <div className="promotions--top-div">
        <img src={`${import.meta.env.BASE_URL}public/ofada-banner.png`} alt="banner image" />
      </div>

      {/* bottom row */}
      <div className="promotions--bottom-div">
        {offersList.map((offer) => (
          <Offer text={offer.text} image={offer.image} />
        ))}
      </div>
    </div>
  );
};
export default Promotions;
