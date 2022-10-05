/* istanbul ignore file */
import { Box } from "@mui/material";

import { useStore } from "@/stores/root";
import {
  getHistoryData,
  getLatestPriceInfo,
} from "@/stores/slices/api/priceHistory";
import SimpleChart from "./SimpleChart";

import { containerStyle } from "./Chart.styles";

export const Chart = () => {
  const initialData = useStore(getHistoryData);
  const latestPriceInfo = useStore(getLatestPriceInfo);
  const { ready } = useStore((store) => store.priceHistory);
  const { pairId } = useStore((state) => state.markets);

  return (
    <Box sx={containerStyle}>
      <SimpleChart
        initialData={initialData}
        update={[]}
        pairId={pairId}
        price={latestPriceInfo.lastPrice}
        change={latestPriceInfo.change}
        percentage={latestPriceInfo.percentageChange}
        loading={!ready}
      />
    </Box>
  );
};
