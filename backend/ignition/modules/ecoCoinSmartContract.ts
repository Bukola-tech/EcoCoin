import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x7C0Fc417e55D76375b2Dd6012E36DE50449332e1";
const nftAddress = "0x9813Fa6B3Ed8a19d4b65724BcAf1E8b0287d4Dc3";

const ContributionRewardSystemModule = buildModule("ContributionRewardSystemModule", (m) => {

    const save = m.contract("ContributionRewardSystem", [nftAddress,tokenAddress]);

    return { save };
});

export default ContributionRewardSystemModule;
