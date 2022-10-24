import { ethers } from "hardhat";

async function main() {
  const Router = await ethers.getContractFactory("AkitaswapV2Router02");
  const WDOGE = "0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101";
  const FACTORY_ADDRESS = "0x2e8880cAdC08E9B438c6052F5ce3869FBd6cE513";
  const router = await Router.deploy(FACTORY_ADDRESS, WDOGE);
  await router.deployed();
  console.log(`Router deployed to: ${router.address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
