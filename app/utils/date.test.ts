import { formatTime } from "./date";

describe("date utils", () => {
  describe("formatTime", () => {
    it("should return 00:00:00", () => {
      const result = formatTime(0);

      expect(result).toBe("00:00:00");
    });

    it("should return 01:10:20", () => {
      const result = formatTime(4220000);

      expect(result).toBe("01:10:20");
    });
  });
});
