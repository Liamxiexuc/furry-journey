import React from 'react';
import { Container, Segment, Table } from 'semantic-ui-react';
import OrderRow from './components/OrderRow';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer'; 
import Header from '../../UI/header/Header';
import { ORDER_BASE_URL, ERROR_URL } from '../../route/URLMap';
import { fetchOrders } from '../../utils/api/order';
import './styles/order.scss';

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
        this.setState({ isLoading: true}, () => {
            fetchOrders()
                .then(orderData => {
                    this.setState(
                         
                        {
                        isLoading: false,
                        orders: orderData.data
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

    render() {
        
        return(
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header className="admin-header--order" as="h2">
                    Orders
                </Header>
                <Container className="admin-order-container">
                    <Segment className="admin-item-container-inner" loading={this.state.isLoading}>
                        <FlexContainer >
                            <Table className="item-table-card" >
                                <Table.Header className="item-table-header">
                                    <Table.Row className="item-table-header-col">
                                        <Table.HeaderCell className="header-label">Order ID</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Order Status</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Order Time</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Total Price</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Pay Status</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">User ID</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Name</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Phone</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Receiver Address</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Comment</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">Product Name | Price</Table.HeaderCell>
                                        <Table.HeaderCell className="header-label">More</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body className="admin-table-body">
                                    {this.state.orders.map(order => (
                                        <OrderRow 
                                            id={order._id}
                                            key={order._id}
                                            userId={order.userId} 
                                            orderTotalPrice={order.orderTotalPrice}
                                            orderStatus={order.orderStatus}
                                            payStatus={order.payStatus}
                                            receiverName={order.receiverName}
                                            receiverPhone={order.receiverPhone}
                                            dishes={order.dishes}
                                            receiverAddress={order.receiverAddress}
                                            createdAt={order.createdAt}
                                            comment={order.comment}
                                            to={`${ORDER_BASE_URL}/${order._id}`}
                                        />
                                    ))}
                                </Table.Body>
                            </Table>
                        </FlexContainer>
                    </Segment>
                </Container>
            </React.Fragment>
        );
    }


};


export default Orders;