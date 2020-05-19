import './Button.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
var identity = require('lodash.identity');

class Button extends PureComponent {

    render() {
        const { onClick, buttonName } = this.props
        return <button className="Button" onClick={onClick}> {buttonName} </button>
    }
}

Button.defaultProps = {
    buttonName: 'Button',
    onClick: identity(() => { })
}

Button.propTypes = {
    buttonName: PropTypes.string,
    onClick: PropTypes.func
}

export default Button