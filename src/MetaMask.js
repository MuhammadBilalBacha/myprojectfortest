const MetaMask = () => {
  const metamaskExtensionHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log(res);
      });
    } else {
      alert("install metamask extension!!");
    }
  };
  return (
    <>
      <button
        className="metamaskbtn wallet-adapter-button wallet-adapter-button-trigger"
        onClick={metamaskExtensionHandler}
      >
        MetaMask
      </button>
    </>
  );
};

export default MetaMask;
