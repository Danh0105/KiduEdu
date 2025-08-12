import React, { Component } from 'react';

class CheckboxItem extends Component {
    render() {
        return (
            <div>
                <label className="form-check-label font-family" style={{ fontSize: "20px" }}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}

export default CheckboxItem;
