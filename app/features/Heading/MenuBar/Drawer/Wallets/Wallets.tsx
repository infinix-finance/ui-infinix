import { Box, Button, Typography } from "@mui/material";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";

import { ProductAsset } from "@/components";
import { WalletId } from "@/defi";

import {
  containerStyle,
  contentStyle,
  disconnectButtonStyle,
  titleStyle,
} from "./Wallets.styles";
import { useStore } from "@/stores/root";
import { getAccount } from "@/stores/slices/connection";
import { shortenAddress } from "@/utils/formatters";

const ConnectWallet = () => {
  const { connect } = useStore((store) => store.connection);

  return (
    <Box sx={contentStyle(false)}>
      <ProductAsset productIds={[WalletId.metamask]} description="EVM" />
      <Button variant="text" size="small" onClick={connect}>
        <PowerOutlinedIcon />
      </Button>
    </Box>
  );
};

const ConnectedWallet = () => {
  const account = useStore(getAccount);
  const { networkId, walletId } = useStore((state) => state.connection.wallet);

  return (
    <Box sx={contentStyle(true)}>
      <ProductAsset
        productIds={[networkId!]}
        description={shortenAddress(account)}
      />
      <ProductAsset productIds={[walletId!]} showLabel={false} />
    </Box>
  );
};

export const Wallets = () => {
  const { connected, disconnect } = useStore((store) => store.connection);

  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle} variant="body2">
        {connected ? "Connected wallet" : "Available wallets"}
      </Typography>
      {connected ? <ConnectedWallet /> : <ConnectWallet />}
      <Button
        sx={disconnectButtonStyle}
        variant="outlined"
        disabled={!connected}
        onClick={disconnect}
      >
        Disconnect
      </Button>
    </Box>
  );
};
