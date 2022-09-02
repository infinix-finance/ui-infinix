import { TabItem, Tabs } from "@/components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { Directions } from "@/defi";
import { useStore } from "@/stores/root";

const tabItems: TabItem[] = [
  {
    label: "Long",
    icon: <ArrowUpwardIcon />,
    colorOverride: "alert.lemon",
  },
  {
    label: "Short",
    icon: <ArrowDownwardIcon />,
    colorOverride: "alert.guava",
  },
];

const directionToIndexMapper = (direction: Directions) =>
  direction === Directions.Long ? 0 : 1;

const indexToDirectionMapper = (index: number) =>
  index === 0 ? Directions.Long : Directions.Short;

export const DirectionSelector = () => {
  const { direction, setDirection } = useStore((state) => state.tradingSidebar);

  const handleChange = (value: number) => {
    setDirection(indexToDirectionMapper(value));
  };

  return (
    <Tabs
      value={directionToIndexMapper(direction)}
      items={tabItems}
      onChange={handleChange}
    />
  );
};
