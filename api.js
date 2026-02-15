const express = require('express');
const app = express();
const morgan = require('morgan');
const Blockchain = require('./blockchain');
const eduChain = new Blockchain();

app.use(express.json()); // Allow the server to read JSON data
app.use(morgan('dev'));  // Log requests to the terminal

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// 1. Endpoint to see the whole blockchain
app.get('/blockchain', (req, res) => {
    res.send(eduChain);
});

// 2. Endpoint to add a new transaction (Academic Record)
app.post('/transaction', (req, res) => {
    const { studentName, degree, university } = req.body;
    eduChain.pendingTransactions.push({ studentName, degree, university });
    res.json({ note: `Record for ${studentName} added to pending transactions.` });
});

// 3. Endpoint to mine a new block
app.get('/mine', (req, res) => {
    const lastBlock = eduChain.chain[eduChain.chain.length - 1];
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = eduChain.pendingTransactions;
    
    const nonce = eduChain.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = eduChain.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = eduChain.createNewBlock(nonce, previousBlockHash, blockHash);
    
    res.json({
        note: "New block mined successfully!",
        block: newBlock
    });
});

app.listen(3000, () => console.log('Blockchain API running on port 3000'));