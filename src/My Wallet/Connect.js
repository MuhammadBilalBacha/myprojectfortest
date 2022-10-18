import React, { useState } from "react";
// import { ethers } from "ethers";
import Provider from "../Provider";
import MetaMask from "../MetaMask";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Connect = (props) => {

  const [show, setShow] = useState(false);



  const connectHandler = () => {
    setShow(!show);

  }
  const khan = !show ? 'Connect' : 'Go back';

  return (
    <div>
      <div className="container mt-2 text-center py-3">
      <button onClick={connectHandler} className="buttonmain mt-3 fw-bold py-3 w-50">{khan}</button>
        <div className="text-center">
          
         {show && <button
          onClick={props.janan} 
            className="buttonmain text-center py-3 fw-bold mt-5"
          >
            <Provider className=' py-3'>
      <WalletMultiButton>PhanToom</WalletMultiButton>
      <MetaMask />
    </Provider>
          </button>}
          
        </div>
      </div>
    </div>
  );
};

export default Connect;
