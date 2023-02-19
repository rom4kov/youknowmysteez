import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Navigation />} />
      </Route>
    </Routes>
  );
};

export default App;
