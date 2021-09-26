import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';
import Header from "./components/Header"
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Person from './components/pages/Person';
import Navbar from './components/Navbar';


function App() {
    return(
      
      <>
       <BrowserRouter>
       <Navbar/>
       
      <Switch>
      
      <Route path="/" exact component={Home}/>
      <Route path="/MovieDetails" component={MovieDetails}/>
      <Route path="/Person" component={Person}/>
      </Switch>
      </BrowserRouter>
      </>
      )
  }

export default App;
