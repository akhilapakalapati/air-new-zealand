import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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

import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signinForm" component={SignInForm} />
      <Route exact path="/complaint-file" component={ComplimentFile}/>
      <Route exact path ="/makecomplaint" component={MakeComplaint}/>
      <Route exact path ="/airpoints" component={Airpoints}/>
      <Route exact path ="/at-the-airport" component={AtTheAirport}/>
      <Route exact path ="/baggage" component={Baggage}/>
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
    <FooterBar/>
  </BrowserRouter>
)

export default App
