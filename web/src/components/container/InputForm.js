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
            <form onSubmit = { this.handleSubmit } >
                <div className='row'>
                    <div className='six columns'>
                        <label>Pattern</label>
                        <WeekFormat store = { this.props.store } />
                    </div>
                    <div className='six columns'>
                        <label>Start Date</label>
                        <FiscalYearStart store = { this.props.store } />
                    </div>
                </div>
                <div className='row'>
                    <GenerateButton handleSubmit = { this.handleSubmit } />
                    <DownloadButton
                        store = { this.props.store }
                        text = 'Download as .csv'
                        dlType = 'csv'
                    />
                    <DownloadButton
                        store = { this.props.store }
                        text = 'Copy to Clipboard'
                        dlType = 'clip'
                    />
                </div>
                <div id = 'clip' data-clipboard-text = { clip } />
            </form>
        );
    }
});
