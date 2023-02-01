// External Dependencies
import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";

type ProgressBarProps = {
  value: number;
  error?: boolean;
  errorText?: string;
  loadingText?: string;
  successText?: string;
  retryText?: string;
  className?: string;
}

const ProgressBar = ({
  value,
  error = false,
  errorText = "Error!",
  retryText = "Reintentar",
  loadingText = "Cargado",
  successText = "Listo!",
  className = "",
}: ProgressBarProps) => {
  const progressNumberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressNumber = progressNumberRef.current?.textContent;
    if (progressNumber) {
      animate(Number(progressNumber), value, {
        duration: 2,
        onUpdate: (v) => {
          if (progressNumberRef.current)
            progressNumberRef.current.textContent = v.toFixed(0);
        },
      });
    }
  }, [value]);

  const containerClasses = twMerge(`flex w-[100%] flex-col gap-2 ${className}`);

  return (
    <div className={containerClasses}>
      {error ? (
        <div className="flex">
          <span className="tracking-[4px] font-bold">{errorText}</span>
        </div>
      ) : (
        <div className="flex gap-2 w-[30px] text-white tracking-[4px]">
          <div className="flex">
            <span ref={progressNumberRef}>0</span>
            <span>%</span>
          </div>
          <span>{loadingText}</span>
        </div>
      )}
      <div className="w-[100%] h-[10px] flex items-stretch bg-gray-200 shadow-sm shadow-grayBlack">
        <motion.div
          className={twMerge(
            `w-0 bg-aquaGreen ${classnames({ "bg-red-500": error })}`
          )}
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 2,
          }}
        />
      </div>
      <div className="flex justify-end">
        <span
          className={twMerge(`
            text-white tracking-[4px]
            ${classnames({
              "text-aquaGreen": !error && value === 100,
              "font-bold": error,
            })}
          `)}
        >
          {!error && value === 100 && successText}
          {error && retryText}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
