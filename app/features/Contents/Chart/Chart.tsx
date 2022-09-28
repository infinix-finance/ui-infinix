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
  const { pair } = useStore((state) => state.ui);

  return (
    <Box sx={containerStyle}>
      <SimpleChart
        initialData={initialData}
        update={[]}
        pairId={pair}
        price={latestPriceInfo.lastPrice}
        change={latestPriceInfo.change}
        percentage={latestPriceInfo.percentageChange}
      />
    </Box>
  );
};
