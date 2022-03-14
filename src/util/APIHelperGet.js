import { makeRequest } from "./APIHelper";

// for get request
const getRequest = async (path) => {
    const options = { path: path, method: "GET" };
    console.log("here is the get request in contacts:", options);
    // eslint-disable-next-line no-return-await
    return await makeRequest(options);
};
export default getRequest;
