import { Contract, providers } from "ethers";

import {
  ERC20,
  ClearingHouse,
  ERC20__factory,
  ClearingHouse__factory,
} from "./types";

export const getERC20Contract = (
  address: string,
  signer: providers.JsonRpcSigner
) => new Contract(address, ERC20__factory.abi, signer) as ERC20;

export const getClearingHouseContract = (signer: providers.JsonRpcSigner) =>
  new Contract(
    process.env.CLEARING_HOUSE!,
    ClearingHouse__factory.abi,
    signer
  ) as ClearingHouse;
