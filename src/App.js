import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Announcement from "./pages/Announcement/Announcement";
import Chat from "./pages/Chat/Chat";
import { useInfoContext } from "./context/infoContext";
import Auth from "./pages/Auth/Auth";

function App() {
  const { currentUser } = useInfoContext();
  return (
    <Routes>

      <Route path="/" element={<Auth />} />
      <Route path="/account" element={<Account />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
