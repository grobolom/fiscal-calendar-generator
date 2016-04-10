import { WeekFormat } from './WeekFormat.js';
import { FiscalYearStart } from './FiscalYearStart.js';
import { GenerateButton } from './GenerateButton.js';

export const InputForm = React.createClass({
    render: function() {
        return (
            <div>
                <WeekFormat />
                <FiscalYearStart />
                <GenerateButton />
            </div>
        );
    }
});
