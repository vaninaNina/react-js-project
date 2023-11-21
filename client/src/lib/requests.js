const options = (data) => {
  const currentOption = {};
  if (data) {
    currentOption.body = JSON.stringify(data);
    currentOption.headers = {
      "content-type": "application/json",
    };
  }

  const token = localStorage.getItem("accessToken");

  if (token) {
    currentOption.headers = {
      ...currentOption.headers,
      "X-Authorization": token,
    };
    //by this,copy the existing headers and add X-Authorization header to the obj
  }

  return currentOption;
};

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...options(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PuT");
export const del = request.bind(null, "DELETE");
