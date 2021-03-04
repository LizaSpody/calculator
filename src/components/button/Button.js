import React from 'react';
import './Button.css';

class Button extends React.Component {
    render () {
        return (
            <button
                onClick={ () => this.props.handleClick(this.props.value) }
                className={ this.props.className }>
                { this.props.value }
            </button>
        )
    }
}

export default Button
