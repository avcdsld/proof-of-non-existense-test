const hre = require("hardhat");

async function main() {
  const proofOfNonExistense = await hre.ethers.deployContract("ProofOfNonExistense");

  await proofOfNonExistense.waitForDeployment();

  console.log(`ProofOfNonExistense deployed to ${proofOfNonExistense.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
