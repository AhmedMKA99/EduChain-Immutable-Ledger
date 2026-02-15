# EduChain: Decentralized Academic Integrity Ledger

## 🔒 Security Overview
EduChain is a custom-built blockchain designed to mitigate credential fraud. It ensures the **Integrity** and **Non-repudiation** of academic records through cryptographic validation.

## 🚀 Key Features
* **SHA-256 Hashing:** Generates unique digital fingerprints for student records.
* **Proof-of-Work (PoW):** Prevents unauthorized data injection by requiring computational consensus.
* **Rest API:** Built with **Express.js** and **Morgan** for secure transaction handling and audit logging.
* **Tamper Detection:** Automated validation engine that rejects the chain if a single bit of data is modified.

## 🛠️ Technical Stack
* **Backend:** Node.js, Express.js
* **Security:** Crypto-JS (SHA-256)
* **Testing:** Postman, Nodemon
* **Frontend:** HTML5/JavaScript

## 🧪 How to Test Integrity
1. Run `npm install`
2. Execute `node security-test.js`
3. Observe the system detect a manual "hack" and invalidate the chain.
