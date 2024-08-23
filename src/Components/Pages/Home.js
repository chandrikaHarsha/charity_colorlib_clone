// import Container from "react-bootstrap/Container";
import banner from "../Assets/charity_banner_hero1.jpg.webp";
import BannerContent from "../Layout/BannerContent";

const Home = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0 imgContainer">
        <img src={banner} alt="banner" className="img-fluid bannerImg" />
        <BannerContent />
      </div>
    </>
  );
};
export default Home;
