const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');

// Get all proposals
router.get('/proposals', async (req, res) => {
  try {
    const proposals = await Proposal.find().sort({ createdAt: -1 });
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single proposal
router.get('/proposals/:id', async (req, res) => {
  try {
    const proposal = await Proposal.findOne({ proposalId: req.params.id });
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create proposal metadata (Off-chain)
router.post('/proposals/metadata', async (req, res) => {
  const proposal = new Proposal({
    proposalId: req.body.proposalId,
    title: req.body.title,
    description: req.body.description,
    proposer: req.body.proposer,
    transactionHash: req.body.transactionHash,
  });

  try {
    const newProposal = await proposal.save();
    res.status(201).json(newProposal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
