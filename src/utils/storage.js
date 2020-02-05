const setItem = (key,valor) => {
    localStorage.setItem(key,JSON.stringify(valor));
};

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const clearItems = () => {
    localStorage.clear();
}

export { clearItems, setItem, getItem };