import React, {useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import ItemManagement from './ItemManagement';
import UserManagement from './UserManagement';

import { ORDER_BASE_URL } from '../../../route/URLMap';

import { deleteOrderById } from '../../../utils/api/order';
import { Container, Segment, Label, Button } from 'semantic-ui-react';

const OrderInfo = props => {
    const [ isDeleting, setIsDeleting ] = useState(false);

    const {
        orderedItems = [],
        orderId,
        orderStatus,
        orderTotalPrice,
        payStatus,
        receiverName,
        receiverAddress,
        receiverPhone,
        isLoading,
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
        // <div className="container">
        //     <div className="header">
        //         {orderedItems}
        //     </div>
        //     <div className="body">
        //         <div className="order-status"></div>
        //         <div className="order-Total-Price"></div>
        //         <div className="pay-Status"></div>
        //         <div className="receiver-address"></div>
        //         <div className="receiver-name"></div>
        //         <div className="receiver-phone"></div>
        //         <div className="receiver-comment"></div>
        //     </div>

        // </div>
        <Container>
            <Image src={image}/>
            <Headers as="h3">
                {receiverName}
            </Headers>
            <Headers as="h3">
                {orderId}
            </Headers>
            <Segment loading={isLoading}>
                <p>
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
                </p>
                <div>
                    <span>Order Dish: </span>
                    {orderedItems.map(item => <Label key={item._id}>{item.productName}</Label>)}
                </div>
                
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteOrder}>
                    Delete
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(OrderInfo);