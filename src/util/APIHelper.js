let token = {};

//get token from local storage
export const getIdToken = () => {
    token = {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
    };

    return token;
};

export const makeRequest = async (opts) => {
    token = await getIdToken();
    const options = {
        ...opts,
        headers: {
            "Content-Type": "application/json",
        },
    };
    console.log("hre is the request", options);
    if (token != null) {
        options.headers["Authorization"] = `Bearer ${token.accessToken}`;
    }

    // Return the fetch response or throw the error.
    // eslint-disable-next-line no-return-await
    return await fetch(options.path, options)
        .then((response) => {
            console.log("here is response", response);
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json().then((data) => ({
                ok: response.ok,
                status: response.status,
                ...data,
            }));
        })
        .then((data) => {
            console.log("here is logout data", data);
            return data;
        })
        .catch((error) => {
            console.log("here is logout error", error);
            if (error.message == 403) {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                    body: JSON.stringify({
                        refreshToken: `${token.refreshToken}`,
                    }),
                };
                console.log("here is request options :", requestOptions);
                return fetch(
                    "http://localhost:4001/auth/refresh-token",
                    requestOptions
                )
                    .then((response) => {
                        if (response.ok && response.status == 201) {
                            response.json().then((data) => {
                                localStorage.setItem(
                                    "accessToken",
                                    data.accessToken
                                );
                                localStorage.setItem(
                                    "refreshToken",
                                    data.refreshToken
                                );
                                //continue previous request
                            });
                        } else {
                            localStorage.removeItem("accessToken");
                            localStorage.removeItem("refreshToken");
                            //redirect to login page
                        }
                    })
                    .then((data) => {
                        console.log("here is data", data);
                    });
            }
            // console.log("here is error help", error);
            // return error;
        });
};
