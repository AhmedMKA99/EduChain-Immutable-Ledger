const Blockchain = require('./blockchain');
const eduChain = new Blockchain();

// 1. Add some academic records to the "Pending" list
// In a real app, this would be a University pushing data
eduChain.pendingTransactions.push({
    studentName: "John Doe",
    degree: "B.Sc. Computer Science",
    university: "Tech University",
    issueDate: "2024-05-20"
});

eduChain.pendingTransactions.push({
    studentName: "Jane Smith",
    degree: "M.Sc. Data Science",
    university: "State College",
    issueDate: "2024-06-15"
});

// 2. Now mine the block containing these records
console.log("Mining block with academic records...");
const lastBlock = eduChain.chain[eduChain.chain.length - 1];
const previousBlockHash = lastBlock.hash;
const currentBlockData = eduChain.pendingTransactions;

const nonce = eduChain.proofOfWork(previousBlockHash, currentBlockData);
const blockHash = eduChain.hashBlock(previousBlockHash, currentBlockData, nonce);

eduChain.createNewBlock(nonce, previousBlockHash, blockHash);

console.log("Block Mined Successfully!");
console.log(JSON.stringify(eduChain, null, 4));