import UserForm from './components/registration/UserForm'
import './App.css';
import { BrowserRouter as Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path='/'>
        <UserForm />
      </Route>
    </>
  );
}

export default App;
