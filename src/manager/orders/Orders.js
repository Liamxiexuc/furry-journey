import React from 'react';
import { Button, Container, Pagination, Segment, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import OrderRow from './components/OrderRow';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer'; 

import Header from '../../UI/header/Header';
import { ORDER_BASE_URL, ERROR_URL } from '../../route/URLMap';
import { fetchOrders } from '../../utils/api/order';

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            error: null,
            isLoading: false,
            isSaving: false,
            pagination: {},
        };
    }

    componentDidMount() {
        // this.loadOrders();

        this.setState({ isLoading: true}, () => {
            fetchOrders()
                .then(orderData => {
                    this.setState({
                        isLoading: false,
                        order: orderData.data
                    });
                })
                .catch(error => 
                    this.setState({
                        error, 
                        isLoading: false
                    },
                    error => {
                        this.props.history.push({
                            pathname: ERROR_URL,
                            state: {error}
                        });
                    }));
        });

    }

    // loadOrders = (pageNum, pageSize) => {
    //     this.setState({ isLoading: true, orders: []}, () => {
    //         fetchOrders(pageNum, pageSize)
    //             .then(this.updateOrderData)
    //             .catch(error => this.setState({ error }));
    //     });
    // }

    // updateOrderData = orderData => {
    //     this.setState({
    //         orders: orderData.orders,
    //         isLoading: false,
    //         pagination: orderData.pagination,
    //     })
    // }

    // handlePageChange = (event, data) => {
    //     this.loadOrders(data.activePage);
    // }

    render() {
        const currentPath = this.props.location.pathname;

        return(
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2">
                    Orders
                </Header>
                <Container>
                    {/* <Button as={Link} to={`${currentPath}/new`} >
                        Create New Order
                    </Button> */}
                    <Segment loading={this.state.isLoading}>
                        <FlexContainer >
                            <Table className="item-table-card" >
                                <Table.Header className="item-table">
                                    <Table.Row className="item-table-header">
                                        <Table.HeaderCell className="header-label">Order ID</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Order Status</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Total Price</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Order Status</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Pay Status</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">User ID</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Name</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Phone</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Address</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Comment</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Dishes</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">More</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {this.state.orders.map(order => (
                                        <OrderRow 
                                            receiverName={order.receiverName}
                                            receiverPhone={order.receiverPhone}
                                            receiverAddress={order.receiverAddress}
                                            orderStatus={order.orderStatus}
                                            totalPrice={order.orderTotalPrice}
                                            payStatus={order.payStatus}
                                            userId={order.userId}
                                            comment={order.comment}
                                            dishes={order.dishes}
                                            id={order._id}
                                            to={`${ORDER_BASE_URL}/${order._id}`}
                                        />
                                    ))}
                                </Table.Body>
                            </Table>
                        </FlexContainer>
                    </Segment>
                    {/* {
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
                    } */}
                </Container>
            </React.Fragment>
        );
    }


};


export default Orders;