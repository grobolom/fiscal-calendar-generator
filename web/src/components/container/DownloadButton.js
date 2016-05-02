import React from 'react';
import { download } from '../../actions/index.js';
import { GenerateButton } from '../presentational/GenerateButton.js';

export const DownloadButton = React.createClass({
    handleClick: function() {
        this.props.store.dispatch(download(this.props.dlType));
    },
    render: function() {
        return (
            <input
                type='button'
                className='button'
                value={ this.props.text }
                onClick={ this.handleClick }
            />
        );
    }
});
