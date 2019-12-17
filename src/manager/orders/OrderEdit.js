import React from 'react';
import { Segment} from 'semantic-ui-react';

import OrderForm from '../orders/components/OrderForm';

import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import Header from '../../UI/header/Header';
import { ORDER_BASE_URL } from '../../route/URLMap';
import { fetchOrderById, saveOrderById } from '../../utils/api/order';

class OrderEdit extends React.Component {
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
            isLoading: false,
            isSaving: false,
        };
    }

    componentDidMount() {
        const orderId = this.props.match.params.id;
        this.setState({ isLoading: true }, () => {
            fetchOrderById(orderId)
                .then(order => this.setState(
                    {
                    id: orderId,
                    orderStatus: order.orderStatus,
                    orderTotalPrice: order.orderTotalPrice,
                    payStatus: order.payStatus,
                    receiverAddress: order.receiverAddress,
                    receiverName: order.receiverName,
                    receiverPhone: order.receiverPhone,
                    comment: order.comment,
                    userId: order.userId,
                    dishes: order.dishes,
                    isLoading: false,
                    isSaving: false,
                   
                }))
                .catch(error => this.setState({ error }));
        });
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const order = { ...this.state };
        const id = this.props.match.params.id;
        this.setState({ isSaving: true }, () => {
            saveOrderById(id, order)
                .then(() => this.props.history
                    .push(`${ORDER_BASE_URL}/${id}`))
                        .catch(error => this.setState({ error }));
        });   
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Edit Order
                </Header>
                <Segment basic loading={this.state.isLoading || this.state.isSaving}>
                    <OrderForm
                        id={this.state.id}
                        orderStatus={this.state.orderStatus}
                        orderTotalPrice={this.state.orderTotalPrice}
                        payStatus={this.state.payStatus}
                        receiverAddress={this.state.receiverAddress}
                        receiverName={this.state.receiverName}
                        receiverPhone={this.state.receiverPhone}
                        comment={this.state.comment}
                        dishes={this.state.dishes}
                        userId={this.state.userId}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSave}
                        submitButtonText="Save"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default OrderEdit;