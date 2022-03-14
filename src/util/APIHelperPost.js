import { makeRequest } from "./APIHelper";
// import { useDispatch } from "react-redux";
// import { RegisterUser } from "../store/actions/RegisterUser";
// FOR POST REQUEST
const postRequest = async (path, body) => {
    // const dispatch = useDispatch();
    const options = {
        path: path,
        method: "POST",
        body: body,
        contentType: "application/json",
    };
    // console.log("here is post request", options);
    // Return the fetch response or throw the error.
    // dispatch(RegisterUser());
    // eslint-disable-next-line no-return-await
    return await makeRequest(options);
};
export default postRequest;
