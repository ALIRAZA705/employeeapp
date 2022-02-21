export const makeRequest = async (opts) => {
  // Get the current token
  // token = await getIdToken();
  // token = localStorage.getItem("jwtoken");

  const options = {
    ...opts,
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("hre is the request", options);
  // if (opts.contentType) {
  //   options.headers["Content-Type"] = opts.contentType;
  // }

  // Return the fetch response or throw the error.
  return await fetch(options.path, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
