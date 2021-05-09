import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import UserForm from './components/registration/UserForm'

function App() {
  return (
    <>
      <Router>
        <Route path='/merkle'>
          <UserForm />
        </Route>
      </Router>
    </>
  );
}

export default App;
