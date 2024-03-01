const BACKEND_URL = "https://heavenly-r2sr.onrender.com";

const checkStatus = async (response) => {
    if (!response.ok) {
        if (response.statusText === 'Unauthorized') {
            // prettier-ignore
            // (new SSRStorage()).removeItem(TOKEN_COOKIE);
            window.location.reload();
        }

        const message = await response.text();

        const err = JSON.parse(message);
        throw Object.freeze({ message: err.message || err.error });
    }

    return response;
};

export const defaultHeaders = {
    Accept: 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Content-Type': 'application/json',
};

const parseJSON = (response) => response.json();

const request = async (url, method, data) => {
    // console.log(url);
    const response = await fetch(`${BACKEND_URL}/${url}`, {
        method: method,
        headers: { ...defaultHeaders },
        body: JSON.stringify(data),
    });
    const result = await checkStatus(response);
    return parseJSON(result);
};
