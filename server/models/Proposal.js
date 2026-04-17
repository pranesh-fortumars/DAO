const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
  proposalId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  proposer: { type: String, required: true },
  targets: [{ type: String }],
  values: [{ type: String }],
  signatures: [{ type: String }],
  calldatas: [{ type: String }],
  startBlock: { type: Number },
  endBlock: { type: Number },
  status: { 
    type: String, 
    enum: ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed'],
    default: 'Pending'
  },
  votesFor: { type: Number, default: 0 },
  votesAgainst: { type: Number, default: 0 },
  votesAbstain: { type: Number, default: 0 },
  transactionHash: { type: String },
  ipfsHash: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proposal', ProposalSchema);
