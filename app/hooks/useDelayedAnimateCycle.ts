import { useEffect } from "react";
import { useCycle } from "framer-motion";

/**
 * "This function will animate a component in and out of view based on a value changing."
 *  At first it Should be used with AnimatePresence component
 * Let's break it down
 * @param {object | null | string | number} valueToWait - This is the value that you want to wait for
 * before animating.
 * @param {number} [delay=700] - number = 700
 * @returns { visible, setVisible }
 */
export const useDelayedAnimateCycle = (
  valueToWait: object | null | string | number,
  delay: number = 200
) => {
  const [visible, setVisible] = useCycle(true, false);

  useEffect(() => {
    if (valueToWait) {
      setTimeout(() => {
        setVisible();
      }, delay);
      setVisible();
    }
  }, [valueToWait]);

  return { visible, setVisible };
};
