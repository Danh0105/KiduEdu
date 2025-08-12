import React, { Component } from 'react'
import product1 from "../../../assets/user/product1.png";
export default class Product extends Component {
    render() {
        return (
            <div>
                <div class="card" >
                    <img src={product1} class="card-img-top placeholder" alt="..." />
                    <div class="card-body placeholder">
                        <h5 class="card-title placeholder">{this.props.name}</h5>
                        <p class="card-text placeholder">{this.props.content}</p>
                        <a href="#" class="btn btn-primary placeholder">Mua ngay</a>
                    </div>
                </div>
            </div>
        )
    }
}
