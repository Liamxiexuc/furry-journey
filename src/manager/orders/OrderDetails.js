import React from 'react';

import OrderInfo from '../orders/components/OrderInfo';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { fetchOrderById } from '../../utils/api/order';

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {},
            error: null,
            isLoading: false,
        };
    }

    componentDidMount() {
        const orderId = this.props.match.params.id;
        this.loadOrder(orderId);
    }

    loadOrder = orderId => this.setState({ isLoading: true }, () => {
        fetchOrderById(orderId)
            .then(order => this.setState({ order, isLoading: false }))
            .catch(this.setErrorState);
    });

    setErrorState = error => this.setState({ error });

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Order Details
                </Header>
                <OrderInfo
                     
                    orderId={this.state.order.id}
                    orderStatus={this.state.order.orderStatus}
                    orderTotalPrice={this.state.order.orderTotalPrice}
                    payStatus={this.state.order.payStatus}
                    receiverAddress={this.state.order.receiverAddress}
                    receiverName={this.state.order.receiverName}
                    receiverPhone={this.state.order.receiverPhone}



               
                    photo={this.state.order.photo}
                    isLoading={this.state.isLoading}
                    
                    reloadPage={this.loadOrder}
                    setErrorState={this.setErrorState}
                    
                />
            </React.Fragment>
        );
    }
};

export default OrderDetails;