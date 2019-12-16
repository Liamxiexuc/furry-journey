import React, {useEffect, useState } from 'react';
import { Button, Container, Divider, Image, Label, Segment, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import ItemManagement from './ItemManagement';
import UserManagement from './UserManagement';

import { ORDER_BASE_URL } from '../../../route/URLMap';

import { deleteOrderById } from '../../../utils/api/order';



const OrderInfo = props => {
    const [ isDeleting, setIsDeleting ] = useState(false);

    const {
        selectedItems = [],
        selectedUsers = [],
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

        <Container>
            <Image  />
            <Header as="h3">
                {receiverName}
            </Header>
            <Header as="h3">
                {orderId}
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
                    <List.item>
                        Order ID: {orderId}
                    </List.item>
                    <List.item>
                        Order Status: {orderStatus}
                    </List.item>
                    <List.item>
                        Total Price: {orderTotalPrice }
                    </List.item>
                    <List.item>
                        Pay Status: { payStatus } 
                    </List.item>
                    <List.item>
                        User ID: {userId}
                    </List.item>
                    <List.item>
                        User Address: {receiverAddress}
                    </List.item>
                    <List.item>
                        User Phone: { receiverPhone }
                    </List.item>
                </List>
                <div>
                    <span>Order Dish: </span>
                    {selectedItems.map(item => <Label key={item._id}>{item.productName}</Label>)}
                </div>
                <ItemManagement 
                    orderId={orderId}
                    reloadPage={reloadPage}
                    selectedItems={selectedItems}
                />
                <UserManagement 
                    orderId={orderId}
                    reloadPage={reloadPage}
                    selectedUsers={selectedUsers}
                />
                <Divider />
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteOrder}>
                    Delete
                </Button>
                <Button as={Link} to="/orders">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(OrderInfo);