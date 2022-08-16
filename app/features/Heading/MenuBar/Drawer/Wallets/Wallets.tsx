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
import { shortenAddress } from "@/utils/formatters";

const ConnectWallet = () => {
  const { activate } = useStore((store) => store.connection);

  return (
    <Box sx={contentStyle(false)}>
      <ProductAsset productIds={[WalletId.metamask]} description="EVM" />
      <Button variant="text" size="small" onClick={activate}>
        <PowerOutlinedIcon />
      </Button>
    </Box>
  );
};

const ConnectedWallet = () => {
  const { chainId, walletId, account } = useStore((state) => state.connection);

  return (
    <Box sx={contentStyle(true)}>
      <ProductAsset
        productIds={[chainId!]}
        description={shortenAddress(account!)}
      />
      <ProductAsset productIds={[walletId!]} showLabel={false} />
    </Box>
  );
};

export const Wallets = () => {
  const { active, deactivate } = useStore((store) => store.connection);

  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle} variant="body2">
        {active ? "Connected wallet" : "Available wallets"}
      </Typography>
      {active ? <ConnectedWallet /> : <ConnectWallet />}
      <Button
        sx={disconnectButtonStyle}
        variant="outlined"
        disabled={!active}
        onClick={deactivate}
      >
        Disconnect
      </Button>
    </Box>
  );
};
