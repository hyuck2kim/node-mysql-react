import { ContactList } from "./components/ContactList";
import { NewContact } from "./components/NewContact";

function App() {
  return (
    <>
      <div>
        <h1>연락처 List</h1>
      </div>
      <ContactList />
      <NewContact />
    </>
  );
}

export default App;
