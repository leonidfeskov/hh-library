import React, { Component } from 'react';


export default class Input extends Component {
    state = {
        value: this.props.value || ''
    };

    handlerOnChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        const { name, type, required } = this.props;
        return (
            <input className="form-control"
                   type={type || 'text'}
                   onChange={this.handlerOnChange}
                   name={name}
                   value={this.state.value}
                   required={required} />
        )
    }
}
