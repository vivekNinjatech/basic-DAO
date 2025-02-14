import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from "hardhat"


const deployGovernorToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // code here
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying Governance Token...");
  const governanceToken = await deploy("GovernanceToken", {
    from: deployer,
    args: [],
    log: true
  });
  log(`Deployed Governance Token to address ${governanceToken.address}`);
  // verify function
  await delegate(governanceToken.address, deployer);
  log("Delegated!");
};

const delegate = async (governanceTokenAddress: string, delegatedAddress: string) => {
  const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress)
  const tx = await governanceToken.delegate(delegatedAddress)
  await tx.wait(1)
  console.log(`Checkpoints ${await governanceToken.numCheckpoints(delegatedAddress)}`)
}
export default deployGovernorToken;