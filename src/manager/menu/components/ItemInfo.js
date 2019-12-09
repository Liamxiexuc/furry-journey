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
        // <div className="container">
        //     <div className="header">
        //         <img src={} />
        //         {productName}
        //     </div>
        //     <div className="body" isLoading={isLoading}>
        //         <div className="price">
        //             {price}
        //         </div>
        //         <div className="productType">
        //             {productType}
        //         </div>
        //         <div className="productInfo">
        //             {productInfo}
        //         </div>
        //         <div className="photo">
        //             {photo}
        //         </div>
        //         <div className="category">
        //             {category}
        //         </div>
        //     </div>
        //     <div className="button-group">
        //         <Link to={`${currentPath}/edit`}> 
        //             Edit
        //         </Link>
        //         <button loading={isDeleting} onClick={deleteItem} >
        //             Delete
        //         </button>
        //     </div>

        // </div>
        <Container >
            <Image />
            <Header >

            </Header>
            <Segment loading={isLoading} >

            </Segment>
        </Container>
    );
};

export default withRouter(ItemInfo);

// class Items extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             error: null,
//             isLoading: false,
//             pagination: {},
//         };
//     }

    // componentDidMount() {
    //     this.loadItems();
    // }

    // loadItems = (pageNum, pageSize) => {
    //     this.setState( { isLoading: true, items: [] }, () => {
    //         fetchItems(pageNum, pageSize)
    //             .then(this.updateItemData)
    //             .catch(error => this.setState( {error}));
    //     });
    // }

    // updateItemData = itemData => {
    //     this.setState( {
    //         items: itemData.item,
    //         isLoading: false,
    //         pagination: itemData.pagination,
    //     })
    // }

    // handlePageChange = (event, data) => {
    //     this.loadItems(data.activePage);
    // // }

    // render() {
    //     const currentPath = this.props.location.pathname;

    //     return (
    //         <React.Fragment>
    //             <ErrorMessage />
    //             <Headers>
                    
    //             </Headers>

    //         </React.Fragment>
    //     )
    // }
