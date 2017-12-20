import isPlainObject from 'lodash/isPlainObject';

function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 400) {
        return response;
    }

    throw new Error('Invalid server response');
}

export function objectToQueryString(query) {
    if (!isPlainObject(query)) {
        return '';
    }

    const serializedObject = Object.keys(query).map(
        key => encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
    ).join('&');
    return `?${serializedObject}`;
}

export const getJson = (url, query) => {
    return fetch(url + objectToQueryString(query), {
        method: 'GET',
    })
        .then(checkHttpStatus)
        .then(response => response.json());
};
