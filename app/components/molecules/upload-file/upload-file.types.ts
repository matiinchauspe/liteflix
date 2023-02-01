export type UploadFileProps = {
  file: File | null;
  placeholder?: string;
  rollBackText?: string;
  onChange: (value: File | null) => void;
}
