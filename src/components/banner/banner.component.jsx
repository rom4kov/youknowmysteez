import { useInView } from "react-intersection-observer";
import "./banner.styles.scss";
import video from "../../assets/videos/rakim.webm";

const Banner = () => {
  const { ref, inView } = useInView();

  return (
    <div className="banner" ref={ref}>
      <video
        src={video}
        autoPlay
        loop
        muted
      >{`Banner inside viewport ${inView}.`}</video>
      <div className="linear-gradient"></div>
    </div>
  );
};

export default Banner;
