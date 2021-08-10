const UpOrDown = artifacts.require("UpOrDown");

async function main() {
  const upOrDown = await UpOrDown.new(
    process.env["ORACLE"],
    process.env["ADMIN_ADDRESS"],
    process.env["OPERATOR_ADDRESS"],
    process.env["INTERVAL_BLOCKS"],
    process.env["BUFFER_BLOCKS"],
    process.env["MIN_BET_AMOUNT"],
    process.env["ORACLE_UPDATE_ALLOWANSE"]
  );
  UpOrDown.setAsDeployed(upOrDown);

  console.log("contract deployed: ", upOrDown.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });