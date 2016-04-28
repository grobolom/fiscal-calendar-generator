var applyMiddleware = function (store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    let dispatch = store.dispatch;
    middlewares.forEach(function (middleware) {
        return dispatch = middleware(store)(dispatch);
    });

    return Object.assign({}, store, { dispatch: dispatch });
}

var createStore = function (reducer, initialState) {
    var state;
    var observers = [];

    if (initialState != undefined) {
        state = initialState;
    }

    var getState = function() {
        return state;
    };

    var dispatch = function(action) {
        console.log(action);
        state = reducer(state, action);
        var listeners = observers;
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    };

    var subscribe = function(observer) {
        observers.push(observer);
    };

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
};

export { applyMiddleware, createStore };
