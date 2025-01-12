## CrowdFunding Dapp 
---
[crowdfund.png](https://postimg.cc/DS2PnF8P)


---
## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Koii Network Integration](#koii-network-integration)
5. [How to Use the Dapp](#how-to-use-the-dapp)
6. [Running the Dapp Locally](#running-the-dapp-locally)
7. [Deploying on Koii Network](#deploying-on-koii-network)
8. [Running Koii Smart Contracts](#running-koii-smart-contracts)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction

Welcome to the **Crowdfunding Dapp**! This decentralized application (Dapp) is built to support crowdfunding campaigns with a focus on transparency, security, and decentralized hosting using Koii Network technology. The Dapp enables creators to launch campaigns, accept contributions, and provide backers with the opportunity to track the progress of their campaigns on-chain.

### What is Crowdfunding Dapp?
The **Crowdfunding Dapp** allows users to create and manage crowdfunding campaigns. Backers can contribute funds, and the campaign owner can utilize the funds as per the campaign's objectives. All transactions and campaign data are securely stored and verified using blockchain technology, ensuring transparency and accountability.

---

## Features

- **Create Crowdfunding Campaigns**: Launch a new crowdfunding campaign by specifying the goal amount, description, and duration.
- **Contribute to Campaigns**: Users can browse available campaigns and contribute funds towards their goals.
- **Real-time Progress Tracking**: Track the progress of the campaign with live updates on the amount raised.
- **Decentralized Hosting**: All campaign data and user contributions are hosted securely and transparently using Koii Network’s decentralized storage.
- **Smart Contracts**: Utilize Koii’s smart contracts for managing the crowdfunding functionality, including campaign creation, contributions, and fund management.

---

## Tech Stack

This Dapp is built using the following technologies:

- **Frontend**: React.js
- **Smart Contracts**: Koii Smart Contracts (deployed on the Koii Network)
- **Backend**: Node.js
- **Decentralized Storage**: Koii Network (IPFS)
- **Blockchain Network**: Koii Network
- **Wallet Integration**: MetaMask, WalletConnect
- **State Management**: Redux

---

## Koii Network Integration

### Koii for Decentralized Hosting

The Crowdfunding Dapp leverages **Koii Network** for its decentralized hosting capabilities. Koii Network provides a decentralized and censorship-resistant environment where applications like this crowdfunding platform can securely store data, ensuring that the platform remains functional regardless of centralized hosting service failures.

Here’s how Koii is used for hosting:

1. **Decentralized File Hosting**: The campaign data, including descriptions, goals, images, and other assets, are hosted on Koii’s decentralized network using **IPFS**.
2. **File Integrity**: By storing the files in Koii, we ensure that the content remains immutable and tamper-proof, which is critical for transparency in crowdfunding.
3. **Proof of Hosting**: Koii provides a proof mechanism, allowing us to prove that the content is hosted and immutable on the network. This can be useful in verifying the authenticity of campaign data and ensuring the integrity of contributions.

### Why Koii for Hosting?
- **Censorship-Resistance**: Koii’s decentralized network ensures that no single party controls the content, providing transparency and trust.
- **Low-Cost Hosting**: Koii's cost-effective decentralized hosting removes the reliance on expensive centralized infrastructure.
- **Distributed Data**: Data is spread across many nodes in the network, ensuring high availability and redundancy.

---

## How to Use the Dapp

1. **Create a Campaign**: 
    - Navigate to the "Create Campaign" page.
    - Fill in details such as the campaign title, description, goal amount, and duration.
    - Upload any relevant images or media for the campaign.
    
2. **Browse Campaigns**: 
    - Go to the "Browse Campaigns" section to view all active campaigns.
    - Filter campaigns by their status, goal amount, or duration.
    
3. **Contribute to a Campaign**: 
    - Select a campaign you'd like to contribute to.
    - Enter the amount you'd like to donate.
    - Confirm the transaction through your wallet (MetaMask or WalletConnect).
    
4. **Track Campaign Progress**: 
    - Each campaign displays real-time progress toward the fundraising goal.
    - View the total amount raised and remaining time for the campaign.

---

## Running the Dapp Locally

Follow these steps to run the Dapp locally for development purposes:

1. Clone the repository:
    ```bash
    git clone https://github.com/gethsun1/crowd-funding-x.git
    cd crowd-funding-x
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file and set the following variables:
    ```bash
    REACT_APP_KOII_API_URL=<your-koii-api-url>
    REACT_APP_INFURA_IPFS_URL=<your-ipfs-api-url>
    ```

4. Run the development server:
    ```bash
    npm start
    ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Deploying on Koii Network

To deploy your Dapp on the **Koii Network**, follow these steps:

1. **Set up Koii CLI**:
    - Install the Koii CLI tools by following the [Koii CLI Documentation](https://www.koii.network/docs/develop/command-line-tool).
    
2. **Create a Koii Task**:
    - Prepare your `task.yml` configuration file to define the task and deployment settings.
    - Set the task executable network to **IPFS** and include the required metadata like `repositoryUrl`, `task_type`, and `token_type`.

3. **Upload Campaign Files**:
    - Upload all static assets, such as HTML, CSS, JavaScript files, and images, to Koii’s IPFS network using the Koii CLI or `ipfs-http-client`.
    
4. **Run the Task**:
    - Execute your task on the Koii Network. The task will host the campaign files on Koii’s decentralized IPFS network.
    
5. **Access the Dapp**:
    - Once hosted on Koii, access the Dapp through the provided IPFS hash or CID.

---

## Running Koii Smart Contracts

To incorporate Koii smart contracts into the Crowdfunding Dapp, follow these steps:

1. **Write Smart Contracts**:
    - Use Koii’s contract templates to create smart contracts for managing campaigns, contributions, and fund distribution.
    - You can use Koii’s [Smart Contract Framework](https://www.koii.network/docs/smart-contracts) to easily deploy and manage your contracts.
    
2. **Deploy Smart Contracts**:
    - Deploy the crowdfunding smart contracts to the Koii network using the Koii CLI tools.
    - You’ll need to interact with Koii’s blockchain through the smart contract to handle funds, contributions, and manage campaign states.
    
3. **Integrate with the Dapp**:
    - Use Koii’s contract addresses in the Dapp’s frontend to interact with the blockchain.
    - Implement the necessary web3 logic to allow users to contribute funds and track their contributions on the blockchain.

---

## Contributing

We welcome contributions to improve the Crowdfunding Dapp! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

Please ensure your code follows our coding standards and passes the tests.



---

## Conclusion

This **Crowdfunding Dapp** leverages the power of blockchain for transparent crowdfunding, with Koii Network providing decentralized hosting and Koii smart contracts enabling secure crowdfunding functionality. By utilizing Koii’s decentralized infrastructure and smart contract capabilities, we can ensure a trustless, transparent, and scalable platform for crowdfunding campaigns.
