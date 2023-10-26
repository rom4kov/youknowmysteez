import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/reducers/user.reducer";

const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Cart = lazy(() => import("./routes/cart/cart.component"));
const Payment = lazy(() => import("./routes/payment/payment.component"));
const Confirmation = lazy(
  () => import("./routes/payment/confirmation.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession({}));
  }, [dispatch]);

  const { ref: intObsRef, inView: navColor } = useInView({
    threshold: 0.2,
  });

  console.log(intObsRef);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation navColor={navColor} />}>
          <Route index element={<Home intObsRef={intObsRef} />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
