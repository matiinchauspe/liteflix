import { useState } from "react";

import { postRequest } from "@api/index";

export const useUploadForm = (url: string) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadForm = async (data: FormData) => {
    setIsLoading(true);

    const image = data.get("image");
    const title = data.get("title");
    try {
      const { data: response } = await postRequest({
        url,
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          image,
          title,
        },
        events: {
          onUploadProgress: (progressEvent) => {
            const progress =
              (progressEvent.loaded / (progressEvent?.total ?? 0)) * 50;
            setProgress(progress);
          },
          onDownloadProgress: (progressEvent) => {
            const progress =
              50 + (progressEvent.loaded / (progressEvent?.total ?? 0)) * 50;
            setProgress(progress);
          },
        },
      });
      setIsSuccess(response.status === "OK");
    } catch (error) {
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { uploadForm, isSuccess, isLoading, progress };
};
