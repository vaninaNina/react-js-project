import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/nfts";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (nftId) => {
  const result = await request.get(`${baseUrl}/${nftId}`);

  return result;
};

export const create = async (nftData) => {
  const result = await request.post(baseUrl, nftData);

  return result;
};

export const edit = async (nftId, nftData) => {
  const result = await request.put(`${baseUrl}/${nftId}`, nftData);

  return result;
};
