const baseUrl = "http://localhost:3030/jsonstore";

export const create = async (nftData) => {
  const response = await fetch(`${baseUrl}/nfts`, {
    methos: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(nftData),
  });

  const result = await response.json();

  return result;
};
