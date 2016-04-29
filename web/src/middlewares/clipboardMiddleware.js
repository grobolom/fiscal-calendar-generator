import Clipboard from 'clipboard';

var clipboardMiddleware = function(store) {
    return function (next) {
        return function (action) {
            console.log(action);
            var clipboard = new Clipboard('#clip');

            clipboard.on('success', function(e) {
                console.log(e);
            });

            clipboard.on('error', function(e) {
                console.log(e);
            });

            clipboard.emit('click');
        };
    }
};

export { clipboardMiddleware };
