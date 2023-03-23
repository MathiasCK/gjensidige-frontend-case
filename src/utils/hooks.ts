import {RefObject, useEffect} from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callBack: () => void,
) => {
  useEffect(() => {
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callBack();
      }
    };
    // @ts-ignore
    document.addEventListener("click", handler);
    return () => {
      // @ts-ignore
      document.removeEventListener("click", handler);
    };
  });
};
