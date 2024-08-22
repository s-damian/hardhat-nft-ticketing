const { TASK_COMPILE } = require("hardhat/builtin-tasks/task-names");
const { HardhatPluginError } = require("hardhat/plugins");

async function main() {
  try {
    const [compiler] = await hre.run(TASK_COMPILE);
    console.log(compiler.version);
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
