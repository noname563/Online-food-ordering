import Home from "./screens/Home";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp.jsx";
import AboutUs from "./screens/AboutUs.jsx";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Feedback from "./screens/Feedback.jsx";
import { CartProvider } from "./components/ContextReducer.jsx";
import Cart from "./screens/Cart.jsx";

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/SignUp" element={<SignUp/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
        <Route exact path="/Feedback" element={<Feedback/>}></Route>
        {/* <Route exact path="/Cart" element={<Cart/>}></Route> */}
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
