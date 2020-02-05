import { clearItems, getItem, setItem } from './storage';

const get = (url) => {
    return window.fetch(url)
        .then(response => response.json());
};

const post = (url, data) => {
    return window.fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
};

const put = (url, data) => {
    return window.fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
};

const isLogged = () => {
    return (getItem('userConnected')) ? getItem('userName') : false;
}

const closeSession = () => {
    clearItems();
}

const createConection = userName => {
    setItem('userConnected', true);
    setItem('userName', userName);
}

export { createConection, closeSession, isLogged, get, post, put };