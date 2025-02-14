import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import {HardhatUserConfig} from "hardhat/config"

// module.exports = {
//   solidity: {
//     version: "0.8.22",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200, // Adjust this value if needed
//       },
//     },
//   },
// };


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 31337
    },
    localhost: {
      chainId: 31337
    }
  },
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Adjust this value if needed
      },
    },
  },
  namedAccounts:{
    deployer:{
      default: 0,
    }
  }
}

export default config