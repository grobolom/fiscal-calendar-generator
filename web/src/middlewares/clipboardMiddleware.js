var clipboardMiddleware = function(store) {
    return function (next) {
        return function (action) {
            console.log(action);
        };
    }
};

export { clipboardMiddleware };
