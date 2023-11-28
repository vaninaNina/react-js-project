import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data";

export const getBlogPost = async () => {
  const result = await request.get(`${baseUrl}/blogPost`);

  return result;
};

export const getFrontText = async () => {
  const result = await request.get(`${baseUrl}/frontText`);

  return result;
};
