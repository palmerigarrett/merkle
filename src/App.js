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
            <Route exact path='/admin'>
              <DisplayUsers />
            </Route>
            <Route exact path='/'>
              <UserForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;