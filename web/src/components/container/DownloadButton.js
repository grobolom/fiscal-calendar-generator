import React from 'react';

export const DownloadButton = React.createClass({
    render: function() {
        return (
            <input
                type='button'
                className='button primary'
                value='Download'
            />
        );
    }
});
