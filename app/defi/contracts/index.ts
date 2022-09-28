import { Contract, providers } from "ethers";

import {
  BasicTokenWithMint,
  ClearingHouse,
  BasicTokenWithMint__factory,
  ClearingHouse__factory,
} from "./types";

export const getTokenContract = (
  signer: providers.JsonRpcSigner,
  address?: string
) =>
  new Contract(
    address || process.env.USDC!,
    BasicTokenWithMint__factory.abi,
    signer
  ) as BasicTokenWithMint;

export const getClearingHouseContract = (
  signer: providers.JsonRpcSigner,
  address?: string
) =>
  new Contract(
    address || process.env.CLEARING_HOUSE!,
    ClearingHouse__factory.abi,
    signer
  ) as ClearingHouse;
