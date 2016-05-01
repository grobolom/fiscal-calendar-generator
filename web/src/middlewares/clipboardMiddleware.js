import Clipboard from 'clipboard';
import { saveAs } from 'filesaverjs';
import { convertNestedArrayToCsv } from '../functions/convertNestedArrayToCsv.js';

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

            if (action.type === 'GENERATE') {
                var content = [
                    convertNestedArrayToCsv(store.getState().entries)
                ];
                var type = {type: "text/csv;charset=utf-8"};
                var blob = new Blob(content, type);

                saveAs(blob, "fiscal_calendar.csv");
            }

            return next(action);
        };
    }
};

export { clipboardMiddleware };
