import './InputLabel.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
var identity = require('lodash.identity');

class InputLabel extends PureComponent {

    render() {
        const { inputName, labelName, onChange } = this.props
        return (
            <div className="InputLabel">
                <label> {labelName} </label>
                <input name={inputName} placeholder={inputName} onChange={onChange} />
            </div>
        );
    }
}

InputLabel.defaultProps = {
    inputName: '',
    labelName: 'Label',
    onChange: identity(() => { })
}

InputLabel.propTypes = {
    inputName: PropTypes.string,
    labelName: PropTypes.string,
    onChange: PropTypes.func
}

export default InputLabel