import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";

const Provider = (props) => {
  const endpoint = "localhost:8899";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()
      // new SolflareWalletAdapter()
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{props.children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default Provider;
