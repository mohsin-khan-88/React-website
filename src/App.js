import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
<>
{/* <Router basename="/projects/trvl"> */}
<Router basename="/React-website">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
 </Router>     
</>
  );
}

export default App;
