import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Views/Home';
import LocationPage from './Views/LocationPage';
import Navigation from './Components/Navigation';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='container' style={{width: '375px', border: 1, borderColor: 'grey'}}>
      <Navigation />
      <Switch>
        <Route path="/location">
          <LocationPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Cart />
    </div>
  );
}

export default App;
