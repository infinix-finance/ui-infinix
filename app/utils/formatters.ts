export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};
