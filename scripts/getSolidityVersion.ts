import { TASK_COMPILE } from "hardhat/builtin-tasks/task-names";
import { HardhatPluginError } from "hardhat/plugins";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main() {
    try {
        const hre: HardhatRuntimeEnvironment = require("hardhat");

        await hre.run(TASK_COMPILE);

        const solcVersion = hre.config.solidity.compilers[0].version;
        console.log(solcVersion);
    } catch (error) {
        if (error instanceof HardhatPluginError) {
            console.error(error.message);
        } else {
            console.error(error);
        }
        process.exit(1);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
