'use client'
// External Dependencies
import { useState } from 'react'
import SimpleBar from 'simplebar-react'
// Internal Dependencies
import { Transcript } from '@lang/es'

// import { Feedback } from "./feedback";
import { UploadFile } from '@components/molecules'
import {
  Text,
  Button,
  Input,
  // ProgressBar
} from '@components/atoms'

const Box = () => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleUploadFile = (value: File | null) => setFile(value)

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const enableAction = (file != null) && title

  return (
    <SimpleBar style={{ maxHeight: '440px' }}>
      <div className="flex flex-col flex-1 gap-10 items-center p-10 w-[100%]">
        <Text color="text-aquaGreen">{Transcript.es.global.addMovie}</Text>
        {/* TODO: DESCOMENTAR LUEGO */}
        {/* <ProgressBar
          value={50}
          errorText={Transcript.es.addMovie.form.error}
          loadingText={Transcript.es.addMovie.form.loadingText}
          successText={Transcript.es.addMovie.form.successText}
          retryText={Transcript.es.addMovie.form.retryText}
          error={false}
        /> */}
        {/* TODO: DESCOMENTAR LUEGO */}
        {/* <Feedback /> */}
        {/* Dropzone */}
        <UploadFile
          file={file}
          placeholder={Transcript.es.addMovie.form.dropzone.title}
          rollBackText={Transcript.es.addMovie.form.actions.change}
          onChange={handleUploadFile}
        />
        <Input
          placeholder={Transcript.es.addMovie.form.inputPlaceholder}
          onChange={onChangeTitle}
        />
        <Button
          onClick={() => {}}
          variant="filled"
          className="bg-white text-grayBlack max-w-[100%]"
          disabled={!enableAction}
        >
          {Transcript.es.addMovie.form.actions.submit}
          {/* TODO: cuando todo termine, ir al home!! */}
          {/* {Transcript.es.global.goHome} */}
        </Button>
      </div>
    </SimpleBar>
  )
}

export default Box
