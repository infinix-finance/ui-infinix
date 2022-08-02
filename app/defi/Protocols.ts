import { Protocol, ProtocolId } from "./types";

export const PROTOCOLS: { [key in ProtocolId]: Protocol } = {
  [ProtocolId.aave]: {
    id: ProtocolId.aave,
    name: "AAVE",
    symbol: "AAVE",
    icon: "/protocols/aave.svg",
  },
  [ProtocolId.crv]: {
    id: ProtocolId.crv,
    name: "Curve",
    symbol: "CRV",
    icon: "/protocols/curve-dao.svg",
  },
  [ProtocolId.uni]: {
    id: ProtocolId.uni,
    name: "Uniswap",
    symbol: "UNI",
    icon: "/protocols/uniswap.svg",
  },
  [ProtocolId.yfi]: {
    id: ProtocolId.yfi,
    name: "Yearn",
    symbol: "YFI",
    icon: "/protocols/yearn-finance.svg",
  },
};
