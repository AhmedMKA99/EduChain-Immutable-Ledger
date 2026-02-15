const sha256 = require('crypto-js/sha256');

function Blockchain() {
    this.chain = []; // Where blocks live
    this.pendingTransactions = []; // Where data sits before it's mined
    
    // Create the very first block (Genesis Block)
    this.createNewBlock(100, '0', '0');
}

// Method to create a new block
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = []; // Clear transactions for the next block
    this.chain.push(newBlock);

    return newBlock;
};

// Create a SHA256 hash based on block data
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString).toString();
    return hash;
};

// Proof of Work: Find a hash that starts with "0000"
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
};

module.exports = Blockchain;
Blockchain.prototype.chainIsValid = function(blockchain) {
    for (let i = 1; i < blockchain.length; i++) {
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i - 1];
        
        // Re-hash the block to see if it matches the stored hash
        const blockHash = this.hashBlock(prevBlock.hash, currentBlock.transactions, currentBlock.nonce);
        
        if (blockHash !== currentBlock.hash) return false;
        if (currentBlock.previousBlockHash !== prevBlock.hash) return false;
    }
    return true;
};