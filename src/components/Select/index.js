import React, { Component } from 'react';


export default class Select extends Component {
    state = {
        value: this.props.value
    };

    handlerOnChange = (e) => {
        const select = e.target;
        let values = [];
        if (this.props.multiple) {
            for (let i = 0, l = select.options.length; i < l; i++) {
                const option = select.options[i];
                if (option.selected) {
                    values.push(option.value);
                }
            }
            this.setState({value: values});
        } else {
            this.setState({value: e.target.value});
        }
    };

    render() {
        const { name, multiple, children } = this.props;

        return (
            <select className="form-control"
                    multiple={multiple}
                    onChange={this.handlerOnChange}
                    name={name}
                    value={this.state.value}>
                {children}
            </select>
        )
    }
}
