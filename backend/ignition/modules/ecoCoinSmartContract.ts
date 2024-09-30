import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x115639e3f0d4A4419E69D303e36e1683217bA444";
const nftAddress = "0x28A71680B1E1240E08513B995FCbcDe451a57dC3";

const ContributionRewardSystemModule = buildModule("ContributionRewardSystemModule", (m) => {

    const save = m.contract("ContributionRewardSystem", [nftAddress,tokenAddress]);

    return { save };
});

export default ContributionRewardSystemModule;
