import clearingHouseAbi from "./abi/clearingHouse.json";

const contractConfig = {
  clearingHouse: {
    addr: process.env.CLEARING_HOUSE!,
    abi: clearingHouseAbi,
  },
};

export default contractConfig;
