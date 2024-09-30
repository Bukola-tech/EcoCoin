import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EcoCoinModule = buildModule("EcoCoinModule", (m) => {

    const erc20 = m.contract("EcoCoin");

    return { erc20 };
});

export default EcoCoinModule;
