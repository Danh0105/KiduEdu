import React, { Component } from 'react'

export default class CheckboxProduct extends Component {
    render() {
        return (
            <div className="form-check" style={{ fontSize: "18px" }}>
                <input
                    class="form-check-input"
                    type="checkbox"
                    value={this.props.id}
                    id="checkDefault"

                />
                <label className="form-check-label" htmlFor="checkChecked">
                    {this.props.name}
                </label>
            </div>
        )
    }
}
