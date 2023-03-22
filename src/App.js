import { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  const intObsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("is entry intersecting?", entry.isIntersecting);
    });
    observer.observe(intObsRef.current);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home intObsRef={intObsRef} />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
