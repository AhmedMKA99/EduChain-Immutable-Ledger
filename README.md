# EduChain: Decentralised Academic Integrity Ledger

## 🔒 Security Overview
EduChain is a custom-built blockchain protocol designed to mitigate the risk of academic record forgery. By leveraging a **Proof-of-Work (PoW)** consensus mechanism and **SHA-256 cryptographic hashing**, the system ensures that once a degree or grade is recorded, it remains immutable and verifiable. This project demonstrates a core understanding of **Data Integrity** and **Non-repudiation** within a decentralised environment.

## 🚀 Key Features
* **Cryptographic Integrity:** Utilises SHA-256 hashing to generate unique digital fingerprints for every block, ensuring no data can be altered without detection.
* **Consensus Mechanism:** Implements a Proof-of-Work algorithm to secure the network against unauthorised data entry and spam attacks.
* **Tamper Detection:** A built-in validation engine that performs recursive integrity checks across the entire chain to reject modified data.
* **Audit Logging:** Integrated with **Morgan** to provide real-time monitoring and security logging of all API requests and transactions.
* **Visual Dashboard:** A frontend interface built with the Fetch API to monitor ledger health and block headers in real-time via a browser.

## 🛠️ Technical Stack
| Category | Technology |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Security** | Crypto-JS (SHA-256) |
| **Testing** | Postman, Nodemon |
| **Frontend** | HTML5, JavaScript (Fetch API) |

---

## 🕹️ Getting Started

### 1. Installation
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

```bash
# Clone this repository
git clone <your-repo-url>

# Install the security dependencies
npm install
2. Run the Security Validation Test
To observe the system's ability to detect an unauthorised data modification, execute the security script:

Bash
node security-test.js
What to look for: The script mines a block, manually alters a student's grade, and triggers a Security Alert as the hash validation fails.

3. Launch the API & Dashboard
To interact with the blockchain as a live service, start the Express server:

Bash
# Use nodemon for automatic server restarts
npx nodemon api.js
The Dashboard: Open your browser and navigate to http://localhost:3000 to view the live ledger.

API Testing: Use Postman to send a POST request to /transaction to add new academic records to the pending pool.


📊 Project Results
Detection Rate: Successfully detected 100% of manual data injections during integrity testing.

Scalability: Engineered a RESTful architecture capable of handling multiple transaction requests before mining.
---
