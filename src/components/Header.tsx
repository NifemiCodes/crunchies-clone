import "../styles/header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-text">
        <h1>Hi Chinedu</h1>
        <p>It's lunch time!</p>
      </div>
      <div className="header-image">
        <img src={`${import.meta.env.BASE_URL}search-icon.svg`} alt="search icon" />
      </div>
    </div>
  );
};
export default Header;
