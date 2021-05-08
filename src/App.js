import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from './components/registration/UserForm'

function App() {
  return (
    <>
      <Route path='/merkle'>
        <UserForm />
      </Route>
    </>
  );
}

export default App;
