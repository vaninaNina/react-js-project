import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (blogPostId) => {
  const query = new URLSearchParams({
    where: `blogPostId="${blogPostId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const create = async (blogPostId, text) => {
  console.log(blogPostId);
  const newComment = await request.post(baseUrl, {
    blogPostId,
    text,
  });
  console.log("EEEEEE", newComment);
  return newComment;
};

export const del = async (id) => {
  await request.del(`${baseUrl}/${id}`);
};
