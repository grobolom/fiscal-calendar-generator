import React from 'react';

import { WeekFormat } from '../presentational/WeekFormat.js';
import { FiscalYearStart } from '../presentational/FiscalYearStart.js';
import { GenerateButton } from '../presentational/GenerateButton.js';
import { generate } from '../../actions/index.js';

export const InputForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.store.dispatch(generate('445', '04/01/2016'));
    },
    render: function() {
        return (
            <form
                onSubmit = { this.handleSubmit }
            >
                <WeekFormat />
                <FiscalYearStart />
                <GenerateButton />
            </form>
        );
    }
});
