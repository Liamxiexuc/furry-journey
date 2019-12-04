import React, {useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import ItemManagement from './ItemManagement';
import UserManagement from './UserManagement';

import { ORDER_BASE_URL } from '../../../route/URLMap';

import { deleteOrderById } from '../../../utils/api/item';

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

    

}