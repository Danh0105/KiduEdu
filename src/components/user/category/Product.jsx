import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Product extends Component {

    render() {
        const formatCurrency = (value) => {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(value);
        };
        return (

            <div class="card" style={{ height: "404.1px", width: "268px" }}>
                <Link to={`/productdetail/${this.props.id}`} className='nav-link'>
                    <img src={this.props.image} class="card-img-top " alt="..." />
                    <div class="row p-0 d-flex justify-content-center">
                        <h5 class="card-title " style={{ fontSize: "15px", fontWeight: 700 }}>{this.props.name}</h5>
                        <div style={{ height: "42px" }} className='mb-2'>
                            <p class="card-text mt-2" style={{ fontSize: "14px" }}>{this.props.content}</p>
                        </div>
                        <p class="card-text text-danger">{formatCurrency(this.props.price)}</p>
                        <div className='d-flex justify-content-between gap-2' >
                            <a href="#" class="btn btn-danger " style={{ fontSize: "15px" }}>Thêm vào giỏ</a>
                            <a href="#" class="btn btn-primary" style={{ fontSize: "15px" }}>Mua ngay</a>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
