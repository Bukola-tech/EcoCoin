import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "";
const nftAddress = "";

const ContributionRewardSystemModule = buildModule("ContributionRewardSystemModule", (m) => {

    const save = m.contract("ContributionRewardSystem", [nftAddress,tokenAddress]);

    return { save };
});

export default ContributionRewardSystemModule;
