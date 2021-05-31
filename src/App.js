import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import BuyVillas from "./components/booking-details";
import HostVillas from "./components/bookings";
import login from "./pages/login";
import register from "./pages/register";
import Header from "./pages/header";
import Logout from "./pages/logout";
import ConfirmBookingDetails from "./components/confirmBookingDetails";
import ListOfBookings from "./components/listOfBookings";
const App = () => {
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div>
      {userInfo ? (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/bookings" component={HostVillas} />
            <Route exact path="/booking-details" component={BuyVillas} />
            <Route
              exact
              path="/booking-confirmations/:hotelId/:finalPriceWithTaxes"
              component={ConfirmBookingDetails}
            />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/your-bookings" component={ListOfBookings} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/bookings" component={HostVillas} />
            <Route exact path="/booking-details" component={BuyVillas} />
            <Route exact path="/login" component={login} />
            <Route exact path="/register" component={register} />
            <Route
              exact
              path="/booking-confirmations/:hotelId/:finalPriceWithTaxes"
              component={ConfirmBookingDetails}
            />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
