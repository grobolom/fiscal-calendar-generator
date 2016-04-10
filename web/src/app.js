import { FiscalDateList } from './components/presentational/FiscalDateList.js';
import { InputForm } from './components/presentational/InputForm.js';
import { getDays } from './functions/getDays.js';

var data = getDays('01/01/2016');

ReactDOM.render(
    <div>
        <h1>Fiscal Calendar Generator</h1>
        <div className='twelve columns'>
            <InputForm />
        </div>
        <div className='twelve columns'>
            <FiscalDateList
                entries = { data }
            />
        </div>
    </div>,
    document.getElementById('main')
);
