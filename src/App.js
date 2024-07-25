import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';

import SignInForm from './components/SignInForm';
import ComplimentFile from './components/ComplimentFile';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import MakeComplaint from './components/MakeComplaint';
import FooterBar from './components/FooterBar';
import Airpoints from './components/Airpoints';
import AtTheAirport from './components/AtTheAirport';
import Baggage from './components/Baggage';
import BookingsAndAirfares from './components/BookingsAndAirfares';
import CorporatePolicy from './components/CorporatePolicy';
import Koru from './components/Koru';
import CustomerService from './components/CustomerService';
import OnThePlane from './components/OnThePlane';
import Delayed from './components/Delayed';
import AskQuestion from './components/AskQuestion';

import './App.css';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/sign-in-form';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signinForm" component={SignInForm} />
        <Route exact path="/complaint-file" component={ComplimentFile} />
        <Route exact path="/makecomplaint" component={MakeComplaint} />
        <Route exact path="/airpoints" component={Airpoints} />
        <Route exact path="/at-the-airport" component={AtTheAirport} />
        <Route exact path="/bookings-and-airfares" component={BookingsAndAirfares} />
        <Route exact path="/corporate-policy" component={CorporatePolicy} />
        <Route exact path="/customer-service" component={CustomerService} />
        <Route exact path="/lounges" component={Koru} />
        <Route exact path="/delayed" component={Delayed} />
        <Route exact path="/baggage" component={Baggage} />
        <Route exact path="/air-question" component={AskQuestion} />
        <Route exact path="/on-the-plane" component={OnThePlane} />
        <Route exact path="/sign-in-form" component={SignInForm} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <FooterBar />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
