import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data";

export const getWallpaperPic = async () => {
  const result = await request.get(`${baseUrl}/wallpaper`);
  console.log(result);
  return result;
};

export const getFrontText = async () => {
  const result = await request.get(`${baseUrl}/frontText`);

  return result;
};

export const getAllBlogPosts = async () => {
  const result = await request.get(`${baseUrl}/blogPost`);

  return result;
};

export const getBlogPost = async (blogPostId) => {
  const result = await request.get(`${baseUrl}/blogPost/${blogPostId}`);
  return result;
};

export const createBlogPost = async (data) => {
  const result = await request.post(`${baseUrl}/blogPost`, data);

  return result;
};

export const editBlogPost = async (blogPostId, data) => {
  const result = await request.put(`${baseUrl}/blogPost/${blogPostId}`, data);

  return result;
};

export const del = async (blogPostId) =>
  request.del(`${baseUrl}/blogPost/${blogPostId}`);
