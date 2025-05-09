import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity:"0.8.28",
  networks: {
    besu: {
      chainId: 1337,
      url: "http://localhost:8548",
      accounts: [
        "0xcbd3762211932c1378df0a49c803dd0b1c470bbdc0608f30d62fa1d4685bc47b"
      ],
      gas: 0x1ffffffffffffe,
      gasPrice: 0
    }
  }
};

export default config;
