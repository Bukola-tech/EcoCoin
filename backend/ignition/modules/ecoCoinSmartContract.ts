import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x51EB9b6407A3eb48bcdfc4d0F3b40bb441b318aB";
const nftAddress = "0x7f108B39Df8f9024f846bBfDd2524D50002cf9e7";

const ContributionRewardSystemModule = buildModule("ContributionRewardSystemModule", (m) => {

    const save = m.contract("ContributionRewardSystem", [nftAddress,tokenAddress]);

    return { save };
});

export default ContributionRewardSystemModule;
