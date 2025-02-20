import { useEffect } from "react";

export const useEnterKey = (callback: Function) => {
  useEffect(() => {
    const onKeyPressed = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        callback();
      }
    };
    document.addEventListener("keyup", onKeyPressed);
    return () => document.removeEventListener("keyup", onKeyPressed);
  });
};

export const useBackspaceKey = (callback: Function) => {
  useEffect(() => {
    const onKeyPressed = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        callback();
      }
    };
    document.addEventListener("keyup", onKeyPressed);
    return () => document.removeEventListener("keyup", onKeyPressed);
  });
};
