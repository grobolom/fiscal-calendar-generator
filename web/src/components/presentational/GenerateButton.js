import React from 'react';

export const GenerateButton = React.createClass({
    render: function() {
        return (
            <input
                type='button'
                value='generate'
                name='generate'
                className='button'
                onClick={ this.props.handleClick }
            />
        );
    }
});
