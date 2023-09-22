import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/actions/user.action";

const App = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, []);

  let { ref: intObsRef, inView: navColor } = useInView({
    threshold: 0.2,
  });

  console.log(intObsRef);

  return (
    <Routes>
      <Route path="/" element={<Navigation navColor={navColor} />}>
        <Route index element={<Home intObsRef={intObsRef} />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
