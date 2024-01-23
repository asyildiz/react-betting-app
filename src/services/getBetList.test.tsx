import { getBetList } from "./";
import { ENDPOINTS } from "../constants/endpoints";
import { betListMockData } from "../mock";

describe("getBetList", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should fetch bet list successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(betListMockData),
    });

    const result = await getBetList();

    expect(result).toEqual(betListMockData);

    expect(fetch).toHaveBeenCalledWith(ENDPOINTS.FETCH_BET_LIST, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("should handles fetch error correctly", async () => {
    const mockError = new Error("Error");

    global.fetch = jest.fn().mockRejectedValue(mockError);

    await expect(getBetList()).rejects.toThrow("Error");

    expect(fetch).toHaveBeenCalledWith(ENDPOINTS.FETCH_BET_LIST, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
