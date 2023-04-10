import { Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import ProductCategory from "./routes/products-category/products-category.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  let { ref: intObsRef, inView: navColor } = useInView({
    threshold: 0.2,
  });

  return (
    <Routes>
      <Route path="/" element={<Navigation navColor={navColor} />}>
        <Route index element={<Home intObsRef={intObsRef} />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />}>
          <Route index path="hats" element={<ProductCategory />} />
          <Route path="sneakers" element={<ProductCategory />} />
          <Route path="jackets" element={<ProductCategory />} />
          <Route path="mens" element={<ProductCategory />} />
          <Route path="womens" element={<ProductCategory />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
