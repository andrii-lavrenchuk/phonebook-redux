import { ToastContainer } from "react-toastify";
import "./App.css";
import ContactList from "./components/ContactsList/ContactList";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
