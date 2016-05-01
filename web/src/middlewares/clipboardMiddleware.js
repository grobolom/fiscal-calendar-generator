import Clipboard from 'clipboard';
import { saveAs } from 'filesaverjs';

var clipboardMiddleware = function(store) {
    return function (next) {
        return function (action) {

            try {
                var isFileSaverSupported = !!new Blob;
            } catch (e) {
                console.log(e);
            }

            if (action.type === 'DOWNLOAD') {
                var clip = new Clipboard('#clip');

                var clipboard = document.getElementById('clip');

                var copyEvent = document.createEvent('Event');
                copyEvent.initEvent('click', true, true);
                clipboard.dispatchEvent(copyEvent);
            }

            if (action.type === 'GENERATE') {
                var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "hello world.txt");
            }

            return next(action);
        };
    }
};

export { clipboardMiddleware };
