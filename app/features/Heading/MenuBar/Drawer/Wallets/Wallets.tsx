import { Box, Button } from "@mui/material";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";

import { ProductAsset } from "@/components";
import { NetworkId, WalletId } from "@/defi";

import {
  containerStyle,
  contentStyle,
  disconnectButtonStyle,
} from "./Wallets.styles";
import { useStore } from "@/stores/root";

export const Wallets = () => {
  const { connect } = useStore((store) => store.connection);

  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle(false)}>
        <ProductAsset productIds={[WalletId.metamask]} description="EVM" />
        <Button variant="text" size="small" onClick={connect}>
          <PowerOutlinedIcon />
        </Button>
      </Box>
      <Box sx={contentStyle(true)}>
        <ProductAsset
          productIds={[NetworkId.avalanche]}
          description="0xfe45..432d"
        />
        <ProductAsset productIds={[WalletId.metamask]} showLabel={false} />
      </Box>
      <Button sx={disconnectButtonStyle} variant="outlined">
        Disconnect
      </Button>
    </Box>
  );
};
