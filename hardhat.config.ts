import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity:"0.8.28",
  networks: {
    besu: {
      chainId: 1337,
      url: "http://localhost:8548",
      accounts: [
        "0xa49f8bcfb9353eb7ae6edab2a818bfb9e71853e18ab99de2893b355ac42ce442"
      ],
      gas: 0x1ffffffffffffe,
      gasPrice: 0
    }
  }
};

export default config;
