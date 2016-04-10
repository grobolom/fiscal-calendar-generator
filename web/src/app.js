import { FiscalDateList } from './components/presentational/FiscalDateList.js';
import { InputForm } from './components/presentational/InputForm.js';
import { getDays } from './functions/getDays.js';

var data = getDays('01/01/2016');

ReactDOM.render(
    <FiscalDateList
        entries={ data }
    />,
    document.getElementById('table')
);

ReactDOM.render(
    <InputForm
        entries={ data }
    />,
    document.getElementById('input-form')
);
