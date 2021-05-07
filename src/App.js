import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from './components/registration/UserForm'
import DisplayUsers from './components/display/DisplayUsers'

function App() {
  return (
    <>
      <Router>
        <div id='container'>
          <Switch>
            <Route path='/merkle/admin'>
              <DisplayUsers />
            </Route>
            <Route exact path='/merkle'>
              <UserForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
