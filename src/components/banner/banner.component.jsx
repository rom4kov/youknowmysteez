import video from "../../assets/video.mp4";

const Banner = () => (
  <div>
    <video width="100%" src={video} autoPlay loop muted></video>
    <div className="video-overlay">
      <h1>youknowmysteez</h1>
    </div>
  </div>
);

export default Banner;
