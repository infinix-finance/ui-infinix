import clearingHouseAbi from "./abi/ClearingHouse.json";

const contractConfig = {
  clearingHouse: {
    addr: process.env.CLEARING_HOUSE!,
    abi: clearingHouseAbi,
  },
};

export default contractConfig;
