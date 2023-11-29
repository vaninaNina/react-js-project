import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/nfts";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (postId) => {
  const result = await request.get(`${baseUrl}/${postId}`);

  return result;
};

export const create = async (nftData) => {
  const result = await request.post(baseUrl, nftData);

  return result;
};

export const edit = async (postId, nftData) => {
  const result = await request.put(`${baseUrl}/${postId}`, nftData);

  return result;
};

export const del = async (postId) => request.del(`${baseUrl}/${postId}`);
