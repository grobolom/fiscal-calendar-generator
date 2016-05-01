import Clipboard from 'clipboard';

var clipboardMiddleware = function(store) {
    return function (next) {
        return function (action) {
            if (action.type === 'DOWNLOAD') {
                var clip = new Clipboard('#clip');

                var clipboard = document.getElementById('clip');

                var copyEvent = document.createEvent('Event');
                copyEvent.initEvent('click', true, true);
                clipboard.dispatchEvent(copyEvent);
            }

            return next(action);
        };
    }
};

export { clipboardMiddleware };
