import "./banner.styles.scss";
import video from "../../assets/videos/video.mp4";

const Banner = () => (
  <div className="banner">
    <video src={video} muted></video>
    <div className="video-overlay">
      <p>ANMELDEN</p>
      <h1 className="title">you know my steez</h1>
      <p>WARENKORB</p>
    </div>
  </div>
);

export default Banner;
