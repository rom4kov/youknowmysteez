import "./banner.styles.scss";
import video from "../../assets/videos/video.mp4";

const Banner = () => (
  <div className="banner">
    <video src={video} muted></video>
  </div>
);

export default Banner;
