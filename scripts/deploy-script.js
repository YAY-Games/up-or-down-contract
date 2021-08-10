const UpOrDown = artifacts.require("UpOrDown");

async function main() {
  const upOrDown = await UpOrDown.new();
  UpOrDown.setAsDeployed(upOrDown);

  console.log("contract deployed: ", upOrDown.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });