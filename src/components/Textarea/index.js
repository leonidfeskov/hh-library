import React, { Component } from 'react';


export default class Textarea extends Component {
    state = {
        value: this.props.value
    };

    handlerOnChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        const { name } = this.props;
        return (
            <textarea className="form-control"
                      onChange={this.handlerOnChange}
                      name={name}
                      value={this.state.value} />
        )
    }
}
