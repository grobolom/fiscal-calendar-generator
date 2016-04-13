import React from 'react';

export const FiscalYearStart = React.createClass({
    render: function() {
        return (
            <input
                type='date'
                name='fiscal-year-start'
                id='fiscal-year-start'
                defaultValue='2016-02-01'
            />
        );
    }
});
