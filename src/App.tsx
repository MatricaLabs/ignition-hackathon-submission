import './App.css';

import { useMemo } from "react";
import Roadmap from "./components/Roadmap/Roadmap.jsx";
import Pixels from "./components/Pixels/Pixels.jsx";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

//const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
// const treasury = new anchor.web3.PublicKey(
//   process.env.REACT_APP_TREASURY_ADDRESS!
// );

// const config = new anchor.web3.PublicKey(
//   process.env.REACT_APP_CANDY_MACHINE_CONFIG!
// );

// const candyMachineId = new anchor.web3.PublicKey(
//   process.env.REACT_APP_CANDY_MACHINE_ID!
// );

// const connection = new anchor.web3.Connection(rpcHost);
// const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
// const txTimeout = 30000;

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getSlopeWallet(),
      getSolflareWallet(),
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <Router>
              <Switch>
                <Route path="/pixels">
                  <Pixels />
                </Route>
                <Route path="/">
                  <Roadmap />
                </Route>
              </Switch>
            </Router>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;