// External Dependencies
import axios from "axios";
// Internal Dependencies
import { UrlConstants } from "@constants/index";

const ApiInstance = axios.create({
  baseURL: UrlConstants.BASE_URL,
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    get: {
      "Content-Type": "application/json",
    },
  },
});

type GetRequest = {
  url: string;
  params?: undefined | null | object;
  headers?: object;
}

type PostRequest = {
  data: object;
} & GetRequest

const paramsFactory = (params: object) =>
  new URLSearchParams([...Object.entries(params)]).toString();

export const getRequest = ({ url, params, headers }: GetRequest) => {
  let parameters = "";
  if (params) parameters = paramsFactory(params);

  return ApiInstance.get(`${url}${parameters}`, {
    headers: {
      // ...ApiInstance.defaults.headers.get,
      // ...(headers && headers),
    },
  });
};

export const postRequest = ({ url, params, headers, data }: PostRequest) => {
  let parameters = "";
  if (params) parameters = paramsFactory(params);

  return ApiInstance.post(
    `${url}${parameters}`,
    { ...data },
    {
      headers: {
        ...ApiInstance.defaults.headers.post,
        ...(headers && headers),
      },
    }
  );
};
