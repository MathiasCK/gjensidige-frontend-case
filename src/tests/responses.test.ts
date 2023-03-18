import {err, notFound} from "@Utils/responses";

window.alert = () => {};

describe("err function", () => {
  it("should throw an error with the given status and message", () => {
    expect(() => {
      err("500 : Internal Server Error");
    }).toThrow("500 : Internal Server Error");
  });
});

describe("notFound function", () => {
  it("should throw an error with the given pokemon name and status code", () => {
    expect(() => {
      notFound("Pikachu");
    }).toThrow('404 : Pokemon "Pikachu" not found');
  });

  // test("should alert the user that the pokemon was not found", () => {
  //   const spy = jest.spyOn(window, "alert");
  //   notFound("undefined");
  //   expect(window.alert).toHaveBeenCalledWith(
  //     '404 : Pokemon "undefined" not found',
  //   );
  // });
});
