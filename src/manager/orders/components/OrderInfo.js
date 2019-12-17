import React, {useEffect, useState } from 'react';
import { Button, Container, Divider, Image, Label, Segment, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import DishRow from "./DishRow";
import ItemManagement from './ItemManagement';
// import UserManagement from './UserManagement';

import { ORDER_BASE_URL } from '../../../route/URLMap';

import { deleteOrderById } from '../../../utils/api/order';



const OrderInfo = props => {
    const [ isDeleting, setIsDeleting ] = useState(false);

    const {
        dishes = [],
        orderId,
        user,
        userId,
        orderStatus,
        orderTotalPrice,
        history,
        payStatus,
        receiverName,
        receiverAddress,
        receiverPhone,
        isLoading,
        isSaving,
        location: {pathname: currentPath},
        reloadPage,
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
        console.log(
            {dishes},
            {orderId},
            {userId},
            {orderStatus},
            {orderTotalPrice},
            
            {payStatus},
            {receiverName},
            {receiverAddress},
            {receiverPhone},

        ),
        <Container>
            <Image  />
            <Header as="h3">
            </Header>
            <Segment loading={isLoading}>
                {/* <p>
                    { orderStatus }
                </p>
                <p>
                    {orderTotalPrice }
                </p>
                <p>
                    { payStatus }
                </p>
                <p>
                    {receiverAddress}
                </p>
                <p>
                    { receiverPhone }
                </p> */}
                <List >
                    <List.Item>
                        Order ID: {orderId}
                    </List.Item>
                    <List.Item>
                        Order Status: {orderStatus}
                    </List.Item>
                    <List.Item>
                        Total Price: {orderTotalPrice }
                    </List.Item>
                    <List.Item>
                        Pay Status: { payStatus } 
                    </List.Item>
                    <List.Item>
                        User ID: {userId}
                    </List.Item>
                    <List.Item>
                        User Address: {receiverAddress}
                    </List.Item>
                    <List.Item>
                        User Phone: { receiverPhone }
                    </List.Item>
                    

                </List>
                <div>
                Order Dish:
                        {dishes.map(dish => (
                            <DishRow 
                                dishID={dish.dishID}  
                                productName={dish.productName}
                                price={dish.price}
                                quantity={dish.quantity} 
                                to={`${ORDER_BASE_URL}/${orderId}/${dish.dishID}`}                              
                            />    
                        ))}
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteOrder}>
                    Delete
                </Button>
                </div>
                {/* <div>
                    <span>Order Dish: </span>
                    {dishes.map(dish => <Label key={dish.dishID}>{dish.productName}</Label>)}
                </div>
                <ItemManagement 
                    orderId={orderId}
                    reloadPage={reloadPage}
                    dishes={dishes}
                /> */}
                {/* <UserManagement 
                    orderId={orderId}
                    reloadPage={reloadPage}
                    user={user}
                /> */}
                <Divider />

                <Button as={Link} to="/orders">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(OrderInfo);