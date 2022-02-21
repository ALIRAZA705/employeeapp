import { makeRequest } from "./APIHelper";

// FOR POST REQUEST
const postRequest = async (path, body) => {
  const options = {
    path: path,
    method: "POST",
    body: body,
    contentType: "application/json",
  };

  // Return the fetch response or throw the error.
  return await makeRequest(options);
};
export default postRequest;
