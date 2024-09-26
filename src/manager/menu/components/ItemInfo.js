import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider,  List, Segment } from 'semantic-ui-react';
import { ITEM_BASE_URL } from '../../../route/URLMap';

import '../styles/item_info.scss';

import { deleteItemById } from '../../../utils/api/item';

const ItemInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {
        itemId,
        productName,
        price,
        productInfo,
        photo,
        category,
        isLoading,
        history,
        setErrorState,
        location: {pathname: currentPath}
    } = props;

    useEffect(()=> {
        if(isDeleting) {
            deleteItemById(itemId)
                .then(() => {
                    history.push( ITEM_BASE_URL );
                })
                .catch(setErrorState);
            }
    }, [isDeleting]);

    const deleteItem = () => {
        if (window.confirm(`Do you want to delete item ${itemId}?`)) {
            setIsDeleting(true)
        }
    };

    return (
        <Container className="item-info-container" >
            <Segment className="item-info" loading={isLoading} >               
                <List className="item-info-detail">
                    <List.Item className="item-info-label">
                        Dish ID: 
                    </List.Item>
                    <List.Item className="item-info-content">
                       { itemId }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Dish Name:  
                    </List.Item>
                    <List.Item className="item-info-content">
                       { productName }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Dish Price: 
                    </List.Item>
                    <List.Item className="item-info-content">
                        { price }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Dish Information:  
                    </List.Item>
                    <List.Item className="item-info-content">
                      {productInfo}
                    </List.Item>
                    <List.Item className="item-info-label">
                        Dish Photo:  
                    </List.Item>
                    <List.Item className="item-info-content">
                     {photo}
                    </List.Item>
                    <List.Item className="item-info-label">
                        Dish Category:  
                    </List.Item>
                    <List.Item className="item-info-content">
                        { category}
                    </List.Item>
                </List>
                <Divider />
                <Button className="item-info-edit" as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button className="item-info-delete" loading={isDeleting} onClick={deleteItem}>
                    Delete
                </Button>
                <Button className="item-info-back" as={Link} to="/items">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(ItemInfo);


