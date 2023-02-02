"use client";
// External Dependencies
import { useDropzone } from "react-dropzone";
// Internal Dependencies
import { UploadFileProps } from "./upload-file.types";

import { Text, Button } from "@components/atoms";
import { ClipIcon } from "@components/atoms/icons";

const UploadFile = ({
  file,
  rollBackText,
  placeholder,
  onChange,
}: UploadFileProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: false,
    noKeyboard: true,
    onDrop: (files) => onChange(files[0]),
  });

  const cleanSelection = () => onChange(null);

  return file ? (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <Text variant="body2" className="text-aquaGreen">
          {file?.name}
        </Text>
      </div>
      <div className="flex justify-center">
        <Button
          variant="outlined"
          className="flex justify-center items-center md:py-2 md:px-2 h-[40px] max-w-[150px] text-aquaGreen"
          onClick={cleanSelection}
        >
          {rollBackText}
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div
        {...getRootProps({
          className: `
            px-10 py-5 md:px-20 md:py-10 border border-dashed border-white cursor-crosshair 
            focus:border-aquaGreen focus:text-aquaGreen focus:outline-none transition-all duration-700
          `,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex gap-4 items-center">
          <ClipIcon svgClassName="-mt-[5px]" />
          <Text className="text-xs md:text-base">{placeholder}</Text>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
