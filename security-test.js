const Blockchain = require('./blockchain');
const eduChain = new Blockchain();

// 1. Add a real record
eduChain.pendingTransactions.push({ student: "John Doe", grade: "A" });
const nonce = eduChain.proofOfWork('0', eduChain.pendingTransactions);
const hash = eduChain.hashBlock('0', eduChain.pendingTransactions, nonce);
eduChain.createNewBlock(nonce, '0', hash);

// 2. Validate the chain (Should be TRUE)
console.log("--- Initial Validation ---");
console.log("Is chain valid?", eduChain.chainIsValid(eduChain.chain));

// 3. THE "HACK": Manually change John's grade in the blockchain
console.log("\n--- ATTEMPTING HACK: Changing Grade to 'F' ---");
eduChain.chain[1].transactions[0].grade = "F"; 

// 4. Validate again (Should be FALSE)
console.log("Is chain valid after tampering?", eduChain.chainIsValid(eduChain.chain));

if (!eduChain.chainIsValid(eduChain.chain)) {
    console.log("SECURITY ALERT: Data tampering detected. Block hash mismatch!");
}