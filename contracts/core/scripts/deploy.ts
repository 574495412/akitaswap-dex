import { ethers } from "hardhat";
import "@nomiclabs/hardhat-etherscan";

async function main() {
  const Factory = await ethers.getContractFactory("AkitaswapV2Factory");
  const AkitaSwapToken = await ethers.getContractFactory("AkitaSwapToken");

  const [deployer] = await ethers.getSigners();
  const factory = await Factory.deploy(deployer.address);
  const akitaSwapToken = await AkitaSwapToken.deploy();
  await factory.deployed();
  await akitaSwapToken.deployed();
  const INIT_CODE_PAIR_HASH = await factory.INIT_CODE_PAIR_HASH();
  console.log(`Factory deployed to: ${factory.address}`);
  console.log(`Pair hash: ${INIT_CODE_PAIR_HASH.substring(2)}`);
  console.log(`akitaSwapToken deployed to: ${akitaSwapToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
