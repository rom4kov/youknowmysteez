import "./banner.styles.scss";
import video from "../../assets/videos/video1.mp4";

const Banner = () => (
  <div className="banner">
    <video src={video} autoPlay loop muted></video>
  </div>
);

export default Banner;
