import {err, notFound} from "@Utils/responses";
import {describe, expect, test} from "@jest/globals";

describe("err function", () => {
  test("should throw an error with the given status and message", () => {
    expect(() => {
      err({status: 500, message: "Internal Server Error"});
    }).toThrow("500 : Internal Server Error");
  });
  test("should throw an error with the default status and message if none are given", () => {
    expect(() => {
      err({});
    }).toThrow("undefined : undefined");
  });
});

describe("notFound function", () => {
  test("should throw an error with the given pokemon name and status code", () => {
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
