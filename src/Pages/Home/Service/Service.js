import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, discription } = service
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container container'>

            <img src={img} alt="" />
            <h4>name: {name}</h4>
            <h5>price: {price}</h5>
            <h6>{discription}</h6>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;