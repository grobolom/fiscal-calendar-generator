import React from 'react';
import { download } from '../../actions/index.js';
import { GenerateButton } from '../presentational/GenerateButton.js';

export const DownloadButton = React.createClass({
    handleClick: function() {
        const { store } = this.context;
        store.dispatch(download());
    },
    render: function() {
        return (
            <input
                type='button'
                className='button primary'
                value='Download'
                onClick={ this.handleClick }
            />
        );
    }
});
