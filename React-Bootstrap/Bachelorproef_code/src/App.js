import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NavbarComp } from './components/NavbarComp'
import { Home } from './components/Home'
import { Cities } from './components/Cities.jsx'

function App() {
  return (
    <>
      <NavbarComp/>
      <Switch>                
        <Route path='/destinations' component={Cities}/>   
        <Route path='/' component={Home}/>            
      </Switch>
    </>
  );
}

export default App;