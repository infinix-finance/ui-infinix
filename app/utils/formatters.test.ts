import { shortenAddress } from "@/utils/formatters";

describe("formatters", () => {
  describe("shortenAddress", () => {
    it("should return an empty string for an invalid address", () => {
      const result = shortenAddress(null);
      expect(result).toBe("");
    });

    it("should format the given address", () => {
      const result = shortenAddress(
        "0x09f0F5035f9633c58b3493D4C4334291E643B262"
      );
      expect(result).toBe("0x09f...262");
    });
  });
});
