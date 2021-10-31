import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import AddPlaces from './Component/AddPlaces/AddPlaces';
import NotFound from './Component/NotFound/NotFound';
import ManageServices from './Component/ManageServices/ManageServices';
import BookingDetails from './Component/BookingDetails/BookingDetails';
import ManageOrders from './Component/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/add-place">
              <AddPlaces></AddPlaces>
            </PrivateRoute>
            <PrivateRoute path="/package-details/:id">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="/manage-orders/:id">
              <ManageOrders></ManageOrders>
            </Route>
            <PrivateRoute path="/manage-services">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
