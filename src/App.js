import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
// import LogIn from "./Components/LogIn";
import MyWallet from "./My Wallet/MyWallet";
import { Route , Routes } from "react-router-dom";
import { StateAuth } from "./ContextApi/AuthContext";


const App = () => {
  return (
    <StateAuth>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/wallet" element={<MyWallet />} />
        </Routes>
      </StateAuth>
  );
};

export default App;
