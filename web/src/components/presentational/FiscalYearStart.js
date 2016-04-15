import React from 'react';
import { setStartDate } from '../../actions/index.js';

export const FiscalYearStart = React.createClass({
    handleChange: function(e) {
        this.props.store.dispatch(setStartDate(e.target.value));
    },
    render: function() {
        return (
            <input
                type='date'
                name='fiscal-year-start'
                id='fiscal-year-start'
                defaultValue='2016-02-01'
                onChange={ this.handleChange }
            />
        );
    }
});
