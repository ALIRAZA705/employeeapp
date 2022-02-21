let token = "";
export const getIdToken = async () => {
  token = localStorage.getItem("accessToken");
  return await token;
};

export const makeRequest = async (opts) => {
  // Get the current token
  token = await getIdToken();
  console.log("here is the token :", token);
  // token = localStorage.getItem("jwtoken");

  const options = {
    ...opts,
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("hre is the request", options);
  if (token != null) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  // Return the fetch response or throw the error.
  return await fetch(options.path, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
