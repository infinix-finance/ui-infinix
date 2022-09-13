import erc20Abi from "./abi/ERC20.json";
import clearingHouseAbi from "./abi/ClearingHouse.json";

const contractConfig = {
  erc20: {
    abi: erc20Abi,
  },
  clearingHouse: {
    addr: process.env.CLEARING_HOUSE!,
    abi: clearingHouseAbi,
  },
};

export default contractConfig;
