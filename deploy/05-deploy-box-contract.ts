import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deplyBoxContract:DeployFunction = async function(hre:HardhatRuntimeEnvironment){
    const {deployments, network, getNamedAccounts} = hre;
    const {deploy} = deployments
    const { deployer } = await getNamedAccounts()

    console.log("Deploying Box...")
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true
    })


    const timeLockContract = await ethers.getContract("TimeLock");
    // const boxContract = await ethers.getContract("Box", box.address);
    // const transferOwnerShipTx = await boxContract.transferOwnership(timeLockContract.address);
    // await transferOwnerShipTx.wait(1);

}

export default deplyBoxContract