/* istanbul ignore file */
import { useStore } from "@/stores/root";

import { createDataProvider } from "./utils";

export default function useRecentTrades() {
  const { list } = useStore((state) => state.recentPositions);
  const dataProvider = createDataProvider(list);

  return {
    dataProvider,
  };
}
