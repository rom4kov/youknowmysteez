import "./banner.styles.scss";
import video from "../../assets/videos/rakim_c.mp4";

const Banner = () => (
  <div className="banner">
    <video src={video} autoPlay loop muted></video>
  </div>
);

export default Banner;
