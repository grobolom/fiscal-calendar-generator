import Clipboard from 'clipboard';
import { saveAs } from 'filesaverjs';
import { convertNestedArrayToCsv } from '../functions/convertNestedArrayToCsv.js';

var clipboardMiddleware = function(store) {
    return function (next) {
        return function (action) {

            var state = store.getState();
            var downloadType = state.downloadType;

            if (action.type === 'DOWNLOAD') {
                switch (downloadType) {
                    case 'clip':
                        var clip = new Clipboard('#clip');
                        var clipboard = document.getElementById('clip');
                        var copyEvent = document.createEvent('Event');
                        copyEvent.initEvent('click', true, true);

                        clipboard.dispatchEvent(copyEvent);
                        break;
                    case 'csv':
                        var content = [
                            convertNestedArrayToCsv(store.getState().entries)
                        ];
                        var type = {type: "text/csv;charset=utf-8"};
                        var blob = new Blob(content, type);

                        saveAs(blob, "fiscal_calendar.csv");
                        break;
                    default:
                        console.log('fail!');
                        break;
                }
            }

            return next(action);
        };
    }
};

export { clipboardMiddleware };
