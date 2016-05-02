import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { FiscalDateList } from './components/presentational/FiscalDateList.js';
import { InputForm } from './components/container/InputForm.js';
import { getDays } from './functions/getDays.js';
import { clipboardMiddleware } from  './middlewares/clipboardMiddleware.js';
import { createStore, applyMiddleware } from './store.js';
import { rootReducer } from './reducers/root.js';

var initialState = {
    pattern: '445',
    start_date: '2016-02-01',
    entries: getDays('445', '2016-02-01')
};
var store = createStore(rootReducer, initialState);
var store = applyMiddleware(store, [ clipboardMiddleware ]);

var ren = function () {
    render(
        <div>
            <div className='container'>
                <h1>Fiscal Calendar Generator</h1>
            </div>
            <div className='container'>
                <InputForm
                    store = { store }
                />
            </div>
            <div className='container'>
                <FiscalDateList
                    entries = { store.getState().entries }
                />
            </div>
        </div>,
        document.getElementById('main')
    )
};

store.subscribe(ren);
ren();
