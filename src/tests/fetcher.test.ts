import {fetcher} from "@Utils/utils";

window.alert = () => {};

describe("fetcher", () => {
  it("should return data from valid path", async () => {
    const data = await fetcher("pokemon/1");
    expect(data).toBeDefined();
    expect(data.name).toEqual("bulbasaur");
  });

  it("should throw an error with status 404 when provided an invalid path", async () => {
    try {
      await fetcher("invalid-path");
    } catch (error: any) {
      expect(error.message).toEqual("404 : Not Found");
    }
  });

  it("should throw an error with status 404 and custom message when provided an invalid pokemon name", async () => {
    try {
      await fetcher("pokemon/invalid-name", "invalid-name");
    } catch (error: any) {
      expect(error.message).toEqual('404 : Pokemon "invalid-name" not found');
    }
  });

  it("should throw an error with status and message when request fails", async () => {
    try {
      await fetcher("pokemon/999999999999999");
    } catch (error: any) {
      expect(error.message).toEqual("404 : Not Found");
    }
  });
});
