import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider, Image, List, Segment, Header} from 'semantic-ui-react';
import { ITEM_BASE_URL } from '../../../route/URLMap';


import { deleteItemById } from '../../../utils/api/item';

const ItemInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {
        items = [],
        itemId,
        productName,
        price,
        productType,
        productInfo,
        photo,
        category,
        isLoading,
        reloadPage,
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
        <Container >
            <Image />
            <Header >
             
            </Header>
            <Segment loading={isLoading} >
               
                <List >
                    <List.Item>
                        Dish ID: { itemId }
                    </List.Item>
                    <List.Item>
                        Dish Name: { productName }
                    </List.Item>
                    <List.Item>
                        Dish Price: { price }
                    </List.Item>
                    <List.Item>
                        Dish Information: {productInfo}
                    </List.Item>
                    <List.Item>
                        Dish Information: {photo}
                    </List.Item>
                    <List.Item>
                        Dish Category: { category}
                    </List.Item>
                </List>

                <Divider />
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteItem}>
                    Delete
                </Button>
                <Button as={Link} to="/items">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(ItemInfo);


