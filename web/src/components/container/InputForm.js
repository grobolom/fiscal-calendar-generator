import React from 'react';

import { DownloadButton } from './DownloadButton.js';
import { WeekFormat } from '../presentational/WeekFormat.js';
import { FiscalYearStart } from '../presentational/FiscalYearStart.js';
import { GenerateButton } from '../presentational/GenerateButton.js';
import { generate } from '../../actions/index.js';

export const InputForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.store.dispatch(generate());
    },
    render: function() {
        return (
            <form
                onSubmit = { this.handleSubmit }
            >
                <WeekFormat
                    store = { this.props.store }
                />
                <FiscalYearStart
                    store = { this.props.store }
                />
                <GenerateButton
                    store = { this.props.store }
                />
                <DownloadButton
                    store = { this.props.store }
                />
            </form>
        );
    }
});
