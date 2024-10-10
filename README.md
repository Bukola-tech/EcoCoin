```bash
EcoCoin Contribution Reward System
Overview
The EcoCoin Contribution Reward System is a decentralized platform that incentivizes users to contribute to environmental causes, particularly plastic recycling. For each contribution made, users are rewarded with a unique NFT that reflects their level of participation. In addition, users earn EcoCoins (an ERC20 token) based on the level of their contribution, providing them with tangible rewards for their efforts.

This project was developed for the Arbitrum Hackathon, encouraging creativity and moonshot ideas. The goal of the platform is to create a sustainable and gamified system that rewards users for real-world environmental contributions.

Tech Stack
Smart Contracts: Arbitrum Sepolia
Token Standards: ERC721 (NFTs) and ERC20 (EcoCoin)
Libraries: OpenZeppelin for secure and standardized contract code

Contracts

EcoCoin (ERC20)
Symbol: ECN
Initial Supply: 100,000 ECN minted to the contract owner
Minting: Contract owner can mint additional tokens
Usage: Users earn EcoCoins for recycling contributions, which can be withdrawn or used in future implementations.

PlasticContributionNFT (ERC721)
NFT Levels: Three levels based on contribution activity
Level 1: Base level for new contributors
Level 2: Intermediate level for consistent contributors
Level 3: Top-tier level for significant contributors
Minting: Users mint NFTs as proof of contribution, which also determines the EcoCoin reward they receive.
Dynamic Metadata: The NFT URI is updated based on the level achieved through contributions.

ContributionRewardSystem
NFT-based Rewards: Users are rewarded with EcoCoins based on the level of their NFTs.
Reward Structure:
Level 1: 1 ECN per NFT
Level 2: 2 ECN per NFT
Level 3: 4 ECN per NFT
Leveling System: Users can upgrade their contribution status and receive higher rewards for consistent contributions.
Owner Control: The contract owner can adjust reward amounts and withdraw tokens.


Implemented Features

NFT Minting for Plastic Contributions: Users can mint NFTs for each contribution.
EcoCoin (ERC20 Token): Users earn EcoCoins based on the level of their contribution NFTs.
Basic Gamification: Users can level up their contribution status, increasing their rewards.
Owner & Admin Controls: The system allows owners to adjust reward values and manage contract settings.


Upcoming Features (In Development)

Contribution Streaks: Users will earn bonus rewards for contributing consistently over time.
Leaderboard: A competitive leaderboard will rank users based on their contributions and streaks.
Environmental Partnerships: Plans to integrate real-world organizations to incentivize large-scale recycling.
Enhanced NFT Metadata: Dynamic updates to NFT metadata based on user activity.
NFT Marketplace: Future plans to allow users to trade their contribution NFTs.


How to Run

Prerequisites
Node.js and npm installed
Solidity development environment (Hardhat or Truffle)
MetaMask or any EIP-1193 compatible wallet
Alchemy API Key

Installation
Clone the repository:
git clone https://github.com/your-repo-link
cd your-repo

Install dependencies:
npm install
Compile the smart contracts:

npx hardhat compile
Deploy the contracts to Arbitrum (or a testnet):

npx hardhat run scripts/deploy.js --network arbitrumSepolia

Test the contract functionality (optional):
npx hardhat test


How It Works
Mint an NFT: Users contribute plastic to recycling centers, and after verification, they mint an NFT representing their contribution.

Claim EcoCoin Rewards: Based on the NFT level, users can claim EcoCoin rewards through the smart contract.

Level Up: Users who contribute more frequently or significantly earn higher-level NFTs, which offer greater rewards.

Gamified Experience: As users accumulate more NFTs and tokens, they progress through different levels, gaining recognition and status within the platform.

License
This project is licensed under the MIT License - see the LICENSE file for details.
```
