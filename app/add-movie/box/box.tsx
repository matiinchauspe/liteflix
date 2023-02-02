"use client";
// External Dependencies
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
// Internal Dependencies
import { Transcript } from "@lang/es";
import { useUploadForm } from "@hooks/useUpload";
import { UPLOAD_MOVIE_URL } from "@constants/url";

import { Feedback } from "./feedback";
import { UploadFile, ProgressBar } from "@components/molecules";
import { Text, Button, Input, Link } from "@components/atoms";

const Box = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const {
    success: uploadSuccess,
    loading,
    error,
    uploadForm,
    resetValues,
    progress,
  } = useUploadForm(UPLOAD_MOVIE_URL);

  const handleUploadFile = (value: File | null) => setFile(value);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const retryActionUpload = () => resetValues()

  const handleSubmit = async () => {
    const data = new FormData();

    data.append("image", file as File);
    data.append("title", title);

    await uploadForm(data);
  };

  const disableAction = !(Boolean(file) && title) || (Boolean(file) && title && loading) || error;
  const showFeedback = !loading && uploadSuccess;
  const showUpload = !loading && !uploadSuccess && !error;
  const showProgressBar = (loading || error)

  return (
    <>
      <SimpleBar style={{ maxHeight: "440px" }}>
        <div className="flex flex-col flex-1 gap-4 md:gap-10 items-center p-5 md:p-10 w-[100%]">
          <Text color="text-aquaGreen">{Transcript.es.global.addMovie}</Text>
          {showProgressBar && (
            <ProgressBar
              value={error ? 100 : progress}
              errorText={Transcript.es.addMovie.form.error}
              loadingText={Transcript.es.addMovie.form.loadingText}
              successText={Transcript.es.addMovie.form.successText}
              retryText={Transcript.es.addMovie.form.retryText}
              retryAction={retryActionUpload}
              error={error}
            />
          )}
          {showFeedback && <Feedback />}
          {/* Dropzone */}
          {showUpload && (
            <UploadFile
              file={file}
              placeholder={Transcript.es.addMovie.form.dropzone.title}
              rollBackText={Transcript.es.addMovie.form.actions.change}
              onChange={handleUploadFile}
            />
          )}
          {!uploadSuccess && (
            <Input
              placeholder={Transcript.es.addMovie.form.inputPlaceholder}
              onChange={onChangeTitle}
            />
          )}
          {!uploadSuccess && (
            <Button
              onClick={handleSubmit}
              variant="filled"
              className="bg-white text-grayBlack max-w-[100%] px-5"
              disabled={disableAction as boolean}
            >
              {Transcript.es.addMovie.form.actions.submit}
            </Button>
          )}
          {uploadSuccess && (
            <Link
              href="/"
              className="tracking-[4px] h-[56px] px-5 md:py-4 md:px-16 opacity-90 hover:opacity-100 transition-opacity bg-white text-grayBlack max-w-[100%]"
            >
              {Transcript.es.global.goHome}
            </Link>
          )}
        </div>
      </SimpleBar>
    </>
  );
};

export default Box;
