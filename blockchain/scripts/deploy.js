const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // 1. Deploy DAO Token
  const DAOToken = await hre.ethers.getContractFactory("DAOToken");
  const token = await DAOToken.deploy(deployer.address);
  await token.waitForDeployment();
  console.log("DAO Token deployed to:", await token.getAddress());

  // 2. Deploy Timelock
  const minDelay = 172800; // 2 days in seconds
  const proposers = []; // Will add Governor later
  const executors = [hre.ethers.ZeroAddress]; // Anyone can execute passed proposals
  const DAOTimelock = await hre.ethers.getContractFactory("DAOTimelock");
  const timelock = await DAOTimelock.deploy(minDelay, proposers, executors, deployer.address);
  await timelock.waitForDeployment();
  console.log("Timelock deployed to:", await timelock.getAddress());

  // 3. Deploy Governor
  const DAOGovernor = await hre.ethers.getContractFactory("DAOGovernor");
  const governor = await DAOGovernor.deploy(await token.getAddress(), await timelock.getAddress());
  await governor.waitForDeployment();
  console.log("Governor deployed to:", await governor.getAddress());

  // 4. Deploy Treasury
  const DAOTreasury = await hre.ethers.getContractFactory("DAOTreasury");
  const treasury = await DAOTreasury.deploy(await timelock.getAddress());
  await treasury.waitForDeployment();
  console.log("Treasury deployed to (controlled by Timelock):", await treasury.getAddress());

  // 5. Setup Roles
  const PROPOSER_ROLE = await timelock.PROPOSER_ROLE();
  const EXECUTOR_ROLE = await timelock.EXECUTOR_ROLE();
  const TIMELOCK_ADMIN_ROLE = await timelock.TIMELOCK_ADMIN_ROLE();

  await timelock.grantRole(PROPOSER_ROLE, await governor.getAddress());
  await timelock.revokeRole(TIMELOCK_ADMIN_ROLE, deployer.address);

  console.log("Governance roles configured.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
