// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.

  // We get the contract to deploy
  const ShortAction = await hre.ethers.getContractFactory('ShortOTokenActionWithSwap');
  const shortAction = await ShortAction.deploy(
    '0x35Ab5fFBe4cd4f34e3959Aa0eEEfeF70be1EBF57', // vault
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // asset
    '0x4572f2554421Bd64Bef1c22c8a81840E8D496BeA', // swap
    '0xa5EA18ac6865f315ff5dD9f1a7fb1d41A30a6779', // whitelist
    '0x4ccc2339F87F6c59c6893E1A678c2266cA58dC72', // controller
    0 // vault type
  );

  await shortAction.deployed();

  console.log('ShortAction contract deployed at:', shortAction.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });