import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Payment from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders";

function App() {
  const promise = loadStripe(
    "pk_test_51KaimASI6i4F9vZjKiOFaruoefN681OFGYax24iLCFM6bQF9QKPIdkdQNTMTPspbqePx25Y9EY2yab2nMAjy0nVq001vrBNDfJ"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        //the user just logged in // or already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Header />, <Login />]} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
