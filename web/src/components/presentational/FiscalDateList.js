import { FiscalDateEntry } from './FiscalDateEntry.js';

export const FiscalDateList = {
    var entries = this.props.entries.map(function(entry) {
        return <FiscalDateEntry
            date = entry.date
            fiscal_day = entry.fiscal_day
            fiscal_week = entry.fiscal_week
            fiscal_month = entry.fiscal_month
            />
    }, this);
    render: function() {
        function() {
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Date</th>
                        <th>Fiscal Day</th>
                        <th>Fiscal Week</th>
                        <th>Fiscal Month</th>
                        <th>Fiscal Year</th>
                    </tr>
                </thead>
                <tbody>
                    { entries }
                </tbody>
            </table>
        }
    }
}
