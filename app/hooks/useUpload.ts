import { useState } from "react";

import { postRequest } from "@api/index";

export const useUploadForm = (url: string) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const resetValues = () => {
    setSuccess(false);
    setError(false);
    setProgress(0);
  }

  const uploadForm = async (data: FormData) => {
    setLoading(true);

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
      setSuccess(response.status === "OK");
    } catch (error) {
      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { success, loading, error, progress, uploadForm, resetValues };
};
