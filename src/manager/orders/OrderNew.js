import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import OrderForm from '../orders/components/OrderForm';
// import ErrorMessage from '../UI/errorMessage/ErrorMessage';
// import Header from '../UI/header/Header';
import { ORDER_BASE_URL } from '../../route/URLMap';
import { createOrder } from '../../utils/api/order';

class OrderNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            orderStatus: '',
            orderTotalPrice: '',
            payStatus: '',
            receiverAddress: '',
            receiverName: '',
            receiverPhone: '',
            userId: '',
            comment: '',
            dishes: '',
            error: null,
            photo: '',
            isCreating: false,
          
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleCreate = () => {
        const order = { ...this.state };
        this.setState({ isCreating: true }, () => {
            createOrder(order)
                .then(newOrder => {
                    this.props.history.push(`${ORDER_BASE_URL}/${newOrder.id}`);
                })
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* <ErrorMessage error={this.state.error} /> */}
                <Header as="h2" textAlign="center">
                    Create Order
                </Header>
                <Segment basic loading={this.state.isCreating}>
                    <OrderForm
                        id={this.state.id}
                        orderStatus={this.state.orderStatus}
                        orderTotalPrice={this.state.orderTotalPrice}
                        payStatus={this.state.payStatus}
                        receiverAddress={this.state.receiverAddress}
                        receiverName={this.state.receiverName}
                        receiverPhone={this.state.receiverPhone}
                        comment={this.state.comment}
                        photo={this.state.photo}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleCreate}
                        image={this.state.image}
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default OrderNew;