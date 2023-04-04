import { Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  let { ref: intObsRef, inView: navColor } = useInView({
    threshold: 0.2,
  });

  return (
    <Routes>
      <Route path="/" element={<Navigation navColor={navColor} />}>
        <Route index element={<Home intObsRef={intObsRef} />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
