import "./banner.styles.scss";
import video from "../../assets/videos/rakim.webm";

const Banner = () => (
  <div className="banner">
    <video src={video} autoPlay loop muted></video>
    <div className="linear-gradient"></div>
  </div>
);

export default Banner;
