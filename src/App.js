import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Exercise_1 from './components/Exercise_1';
import Exercise_2 from './components/Exercise_2';
import Exercise_3 from './components/Exercise_3';
import './App.module.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/exercise_1'>
          <Exercise_1 />
        </Route>
        <Route exact path='/exercise_2'>
          <Exercise_2 />
        </Route>
        <Route exact path='/exercise_3'>
          <Exercise_3 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;