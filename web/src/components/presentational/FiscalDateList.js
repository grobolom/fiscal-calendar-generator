import React from 'react';
import { FiscalDateEntry } from './FiscalDateEntry.js';

export const FiscalDateList = React.createClass({
    render: function() {
        var entries = this.props.entries
            .filter(function(entry) {
                return (entry.fiscal_day < 10 || entry.fiscal_day > 360);
            })
            .map(function(entry) {
            return (
                <FiscalDateEntry
                    day = { entry.day }
                    month = { entry.month }
                    year = { entry.year }
                    date = { entry.date }
                    fiscal_day = { entry.fiscal_day }
                    fiscal_week = { entry.fiscal_week }
                    fiscal_month = { entry.fiscal_month }
                    fiscal_year = { entry.fiscal_year }
                    key = { entry.fiscal_day }
                />
            );
        }, this);
        return (
            <table className='u-full-width'>
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
        );
    }
});
