import { useInView } from "react-intersection-observer";
import "./banner.styles.scss";
import video from "../../assets/videos/rakim.webm";

const Banner = ({ changeNavColor }) => {
  const { ref, inView } = useInView();

  let navCol = "";

  if (inView === true) {
    navCol = "white";
  } else {
    navCol = "black";
  }

  console.log(navCol);

  return (
    <div className="banner" ref={ref}>
      <input value={inView} onChange={() => alert("changed!")} />
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
