import { render } from 'react-dom';
import React from 'react';

import { FiscalDateList } from './components/presentational/FiscalDateList.js';
import { InputForm } from './components/container/InputForm.js';
import { getDays } from './functions/getDays.js';

var data = getDays('01/01/2016');

var store = {
    dispatch: function(anything) {
        console.log(anything);
    }
};

render(
    <div>
        <h1>Fiscal Calendar Generator</h1>
        <div className='twelve columns'>
            <InputForm
                store = { store }
            />
        </div>
        <div className='twelve columns'>
            <FiscalDateList
                entries = { data }
            />
        </div>
    </div>,
    document.getElementById('main')
);
