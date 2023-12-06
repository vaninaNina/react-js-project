import * as request from "../lib/requests.js";

const baseUrl = "http://localhost:3030/data/likes";

export const getAll = async (postId) => {
  const query = new URLSearchParams({
    where: `postId="${postId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const addLike = async (postId) => {
  await request.post(baseUrl, {
    postId,
  });
};

export const removeLike = async (postId) => {
  try {
    console.log(postId);
    await request.del(baseUrl, {
      postId,
    });
  } catch (e) {
    console.log(e);
  }
};
