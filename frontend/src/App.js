import './App.css';
import { Switch,Route } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import Home from "./components/Home/Home";
import AddEditContact from "./components/AddEditContact/AddEditContact";


function App() {
  return (
    <div className="App">
      <Home/>
      <Switch>
        <Route exact path='/' component={ContactList} />
        <Route path='/(add_contact|edit_contact)' component={AddEditContact} />
      </Switch>
     
    </div>
  );
}

export default App;
