import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { cloneDeep } from "lodash";
var identity = require('lodash.identity');

class Button extends PureComponent {

    properties = cloneDeep(this.props)
    updateStyles = () => {
        const { buttonName } = this.properties
        switch(buttonName){
            case '/':
            case '*':
            case '-':
            case '+':
            case '=':
            this.properties = {...this.properties, style : {...this.properties.style, backgroundColor: "rgb(255, 156, 0)"}}
            break;
            case 'AC':
            case '+/-':
            case '%':
            this.properties = {...this.properties, style : {...this.properties.style, backgroundColor: "rgb(106, 107, 111)"}}
            break;
            default: 
            this.properties = {...this.properties, style : {...this.properties.style, backgroundColor: "rgb(120, 122, 129)"}}
        }
    }

    render() {
        this.updateStyles()
        console.log(JSON.stringify(this.properties))
        const { onClick, buttonName, style } = this.properties
        return (
        <button style = {style } onClick = {onClick}> {buttonName}</button>
        );
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