import React, { useContext, useState } from "react";
import AuthContext from "../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import "./MyWallet.css";
import Connect from "./Connect";

const MyWallet = () => {
  const { user, logout } = useContext(AuthContext);
  const Navigate = useNavigate();

  const [khan, setKhan] = useState(false);

  const accountHandler = () => {
    setKhan(!khan);
  };

  const walletHandler = () => {
    // Navigate("/walle/connect");
  };

  const logoutHandle = async () => {
    try {
      await logout();
      Navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className="forAll vh-100">
      <nav className="mynav py-4">
        <div className="container Mycontain">
          <div>
            {" "}
            <h5>Medium</h5>
          </div>
          <div>
            <button onClick={walletHandler} className="px-3 ">
              My Wallets
            </button>
            <button onClick={accountHandler} className="px-3 ">
              My Account
            </button>
          </div>
        </div>
      </nav>

      {khan && (
        <div className="forAccount vh-100 text-center py-5">
          <h1>My Account</h1>
          <p>email : {user && user.email} </p>
          <button onClick={logoutHandle} className="buttonmain px-3 py-2">
            Logout
          </button>
        </div>
      )}
      <Connect janan={()=> {
        alert('hillo');
      }} />
    </section>
  );
};

export default MyWallet;
