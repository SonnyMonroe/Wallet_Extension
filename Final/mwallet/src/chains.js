const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: process.env.ETHEREUM_RPC_URL,
  ticker: "ETH",
};
//Maybe these RPC-URL's are no longer active which is why I cannot view token balances? 7/19 at 4:44pm
const MumbaiTestnet = {
  hex: "0x13881",
  name: "Mumbai Testnet",
  rpcUrl: process.env.MUMBAI_RPC_URL,
  ticker: "MATIC",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0x13881": MumbaiTestnet,
};
