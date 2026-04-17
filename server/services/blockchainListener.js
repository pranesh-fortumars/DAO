const { ethers } = require('ethers');
const Proposal = require('../models/Proposal');
const dotenv = require('dotenv');

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

// Contract ABIs and Addresses (Placeholders)
const GOVERNOR_ADDRESS = process.env.GOVERNOR_ADDRESS;
const GOVERNOR_ABI = [
  "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
  "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
  "event ProposalExecuted(uint256 proposalId)",
  "event ProposalCanceled(uint256 proposalId)"
];

const startListener = () => {
  if (!GOVERNOR_ADDRESS) {
    console.warn('Governor address not configured. Listener not started.');
    return;
  }

  const contract = new ethers.Contract(GOVERNOR_ADDRESS, GOVERNOR_ABI, provider);

  console.log('Starting on-chain event listener...');

  contract.on('ProposalCreated', async (proposalId, proposer, targets, values, signatures, calldatas, startBlock, endBlock, description) => {
    console.log(`New Proposal Created: ${proposalId}`);
    try {
      await Proposal.findOneAndUpdate(
        { proposalId: proposalId.toString() },
        {
          proposalId: proposalId.toString(),
          proposer,
          targets,
          values: values.map(v => v.toString()),
          calldatas,
          startBlock: Number(startBlock),
          endBlock: Number(endBlock),
          status: 'Active'
        },
        { upsert: true }
      );
    } catch (err) {
      console.error('Error syncing proposal:', err);
    }
  });

  contract.on('ProposalExecuted', async (proposalId) => {
    await Proposal.findOneAndUpdate({ proposalId: proposalId.toString() }, { status: 'Executed' });
  });

  // Add more listeners as needed...
};

module.exports = { startListener };
