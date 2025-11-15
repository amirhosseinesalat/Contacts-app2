import Contacts from "./Contacts";
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <Contacts />
    </UserProvider>
  );
}

export default App;
