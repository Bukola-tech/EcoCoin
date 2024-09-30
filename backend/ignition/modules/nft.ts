import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PlasticContributionNFTModule = buildModule("PlasticContributionNFTModule", (m) => {

    const nft = m.contract("PlasticContributionNFT");

    return { nft };
});



export default PlasticContributionNFTModule;
