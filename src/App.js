import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SignInForm from './components/SignInForm'
import complaintFile from './components/ComplaintFile';
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import MakeComplaint from './components/MakeComplaint';
import FooterBar from './components/FooterBar'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signinForm" component={SignInForm} />
      <Route exact path="/complaint-file" component={complaintFile}/>
      <Route exact Path ="/makecomplaint" component={MakeComplaint}/>
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
    <FooterBar/>
  </BrowserRouter>
)

export default App
