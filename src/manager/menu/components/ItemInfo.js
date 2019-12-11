import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider, Image, Label, Segment, Header} from 'semantic-ui-react';
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
                {itemId}
            </Header>
            <Segment loading={isLoading} >
                <p>
                    { productName }
                </p>
                <p>
                    { price }
                </p>
                <p>
                   {productType} 
                </p>
                <p>
                    {productInfo}
                </p>
                <p>
                    {photo}
                </p>
                <p>
                    { category}
                </p>
                <Button >
                    Edit
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(ItemInfo);


