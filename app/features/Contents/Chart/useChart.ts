/* istanbul ignore file */
import { useStore } from "@/stores/root";
import { getHistoryData } from "@/stores/slices/api/priceHistory";

export default function useChart() {
  const initialData = useStore(getHistoryData);

  return { initialData, update: [] };
}
