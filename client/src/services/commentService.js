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
  const newComment = await request.post(baseUrl, {
    blogPostId,
    text,
  });

  return newComment;
};

export const del = async (blogPostId, _id) => {
  const query = new URLSearchParams({
    blogPostId,
    commentId: _id,
  });

  await request.del(`${baseUrl}?${query}`);
};
