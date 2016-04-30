import React from 'react';

import { DownloadButton } from './DownloadButton.js';
import { WeekFormat } from '../presentational/WeekFormat.js';
import { FiscalYearStart } from '../presentational/FiscalYearStart.js';
import { GenerateButton } from '../presentational/GenerateButton.js';
import { generate } from '../../actions/index.js';

import { convertNestedArrayToCsv } from '../../functions/convertNestedArrayToCsv.js';

export const InputForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.store.dispatch(generate());
    },
    render: function() {
        var entries = this.props.store.getState().entries;
        var clip = convertNestedArrayToCsv(entries);
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
                <div
                    id = 'clip'
                    data-clipboard-text = { clip }
                />
            </form>
        );
    }
});
