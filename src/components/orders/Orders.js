import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const loadOrders = useLoaderData();
    console.log(loadOrders);
    return (
        <div>
            <h2>Order Page {loadOrders.length}</h2>
        </div>
    );
};

export default Orders;