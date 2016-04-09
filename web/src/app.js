import { FiscalDateList } from './components/presentational/FiscalDateList.js';
import { getDays } from './functions/getDays.js';

var data = getDays('01/01/2016');

ReactDOM.render(
    <FiscalDateList
        entries={ data }
    />,
    document.getElementById('table')
);
