import React from 'react';
import { setPattern } from '../../actions/index.js';

export const WeekFormat = React.createClass({
    handleChange: function(e) {
        this.props.store.dispatch(setPattern(e.target.value));
    },
    render: function() {
        return (
            <input
                type='text'
                placeholder='445'
                defaultValue='445'
                onChange={ this.handleChange }
            />
        );
    }
});
