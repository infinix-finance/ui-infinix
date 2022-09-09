/* istanbul ignore file */
import { useEffect, useState } from "react";
import { generateRandomTick } from "./SimpleChart/mock";

import { initialData } from "./SimpleChart/mock";

export default function useChart() {
  const [update, setUpdate] = useState<any[]>([
    { time: 1559075600, value: generateRandomTick() },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setUpdate((last) => [
        { time: last[0].time + 5000, value: generateRandomTick() },
      ]);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return { initialData, update };
}
