import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from 'hardhat-deploy/types';
import { MIN_DELAY } from "../utils/helper-hardhat-config";


const deployTimeLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying TimeLock...");
  const timeLock = await deploy("TimeLock", {
    from: deployer,
    args: [MIN_DELAY, [], [], deployer],
    log: true
  });
  log(`Deployed Governance Token to address ${timeLock.address}`);

}
export default deployTimeLock;