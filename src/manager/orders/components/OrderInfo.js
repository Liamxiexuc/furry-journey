import React, {useEffect, useState } from 'react';
import { Button, Container, Divider, Segment, List} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import DishDetail from "../components/dishComponents/DishDetail";
import { ORDER_BASE_URL } from '../../../route/URLMap';

import { deleteOrderById } from '../../../utils/api/order';
import '../styles/order_info.scss';


const OrderInfo = props => {
    const [ isDeleting, setIsDeleting ] = useState(false);

    const {
        dishes = [],
        orderId,
        userId,
        orderStatus,
        orderTotalPrice,
        history,
        payStatus,
        receiverName,
        receiverAddress,
        receiverPhone,
        isLoading,
        location: {pathname: currentPath},
        setErrorState    
    } = props;

    useEffect(() => {
        if(isDeleting) {
            deleteOrderById(orderId)
                .then(() => {
                    history.push(ORDER_BASE_URL);
                })
                .catch(setErrorState);
        }
    }, [isDeleting]);

    const deleteOrder = () => {
        if(window.confirm(`Do you want to delete order ${orderId}`)) {
            setIsDeleting(true)
        }
    };

    return (
        <Container className="order-info-container">
            <Segment className="item-info" loading={isLoading}>
                <List className="item-info-detail">
                    <List.Item className="item-info-label">
                        Order ID:  
                    </List.Item>
                    <List.Item className="item-info-content">
                     {orderId}
                    </List.Item>
                    <List.Item className="item-info-label">
                        Order Status: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    {orderStatus}
                    </List.Item>
                    <List.Item className="item-info-label">
                        Total Price: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    {orderTotalPrice }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Pay Status:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    { payStatus } 
                    </List.Item>
                    <List.Item className="item-info-label">
                        User ID:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    {userId}
                    </List.Item>
                    <List.Item className="item-info-label">
                        User Name: 
                    </List.Item>
                    <List.Item className="item-info-label">
                        {receiverName}
                    </List.Item>
                    <List.Item className="item-info-label">
                        User Address: 
                    </List.Item>
                    <List.Item className="item-info-content">
                   {receiverAddress}
                    </List.Item>
                    <List.Item className="item-info-label">
                        User Phone:  
                    </List.Item>
                    <List.Item className="item-info-content">
                   { receiverPhone }
                    </List.Item>
                </List>
                <div>
                Order Dish:
                        {dishes.map(dish => (
                            <DishDetail 
                                dishID={dish.dishID}  
                                productName={dish.productName}
                                price={dish.price}
                                quantity={dish.quantity} 
                                to={`${ORDER_BASE_URL}/${orderId}/${dish.dishID}`}                              
                            />    
                        ))}

                </div>
                <Divider />

                <Button as={Link} to="/orders">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(OrderInfo);