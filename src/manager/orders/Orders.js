import React from 'react';
import { Button, Container, Pagination, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import OrderCard from './components/OrderCard';
import ErrorMessage from '../../UI/errorMessage/ErrorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer'; 

import Header from '../../UI/header/Header';
import { ORDER_BASE_URL } from '../../route/URLMap';
import { fetchOrders } from '../../utils/api/order';

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            error: null,
            isLoading: false,
            pagination: {},
        };
    }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = (pageNum, pageSize) => {
        this.setState({ isLoading: true, orders: []}, () => {
            fetchOrders(pageNum, pageSize)
                .then(this.updateOrderData)
                .catch(error => this.setState({ error }));
        });
    }

    updateOrderData = orderData => {
        this.setState({
            orders: orderData.orders,
            isLoading: false,
            pagination: orderData.pagination,
        })
    }

    handlePageChange = (event, data) => {
        this.loadOrders(data.activePage);
    }

    render() {
        const currentPath = this.props.location.pathname;

        return(
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2">
                    Orders
                </Header>
                <Container>
                    <Button as={Link} to={`${currentPath}/new`} >
                        Create New Order
                    </Button>
                    <Segment loading={this.state.isLoading}>
                        <FlexContainer >
                            {this.state.orders.map(order => (
                                <OrderCard 
                                    receiverName={order.receiverName}
                                    receiverPhone={order.receiverPhone}
                                    receiverAddress={order.receiverAddress}
                                    orderStatus={order.orderStatus}
                                    totalPrice={order.totalPrice}
                                    payStatus={order.payStatus}
                                    key={order.id}
                                    to={`${ORDER_BASE_URL}/${order.id}`}
                                />
                            ))}
                        </FlexContainer>
                    </Segment>
                    {
                        this.state.pagination.page && (
                            <FlexContainer >
                                <Pagination 
                                    activePage={this.state.pagination.page}
                                    disabled={this.state.isLoading}
                                    onPageChange={this.handlePageChange}
                                    totalPages={this.state.pagination.pages}
                                />
                            </FlexContainer>
                        )
                    }
                </Container>
            </React.Fragment>
        );
    }


};


export default Orders;