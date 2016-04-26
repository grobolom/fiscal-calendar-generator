import React from 'react';

export const GenerateButton = React.createClass({
    render: function() {
        return (
            <input
                type='submit'
                value='generate'
                name='generate'
                className='button-primary'
                onClick={ this.props.handleClick }
            />
        );
    }
});
