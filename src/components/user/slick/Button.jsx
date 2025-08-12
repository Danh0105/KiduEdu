import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import '../../../index.css'
export default class Button extends Component {
    render() {
        return (
            <button type="button" class={`btn ${this.props.classname}  text-start arrow-btn`} style={{ width: "268px", borderRadius: "18px" }}>
                <div class="d-flex justify-content-between">
                    <div>
                        <div>{this.props.name}</div>
                        <div>{this.props.detail}</div>
                    </div>
                    <div
                        style={{ width: "50px", height: "50px", cursor: "pointer" }}
                        className='arrow-icon rounded-circle bg-white d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faArrowUp} className=" text-dark arrow-icon" style={{ padding: "10px" }} />
                    </div>
                </div>
            </button>
        )
    }
}
