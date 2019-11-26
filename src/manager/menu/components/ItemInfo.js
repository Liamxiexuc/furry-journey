import React from 'react';
import {Link} from 'react-router-dom';

import ItemCard from '../components/ItemCard';

class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            error: null,
            isLoading: false,
            pagination: {},
        };
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = (pageNum, pageSize) => {
        this.setState( { isLoading: true, items: [] }, () => {
            fetchItems(pageNum, pageSize)
                .then(this.updateItemData)
                .catch(error => this.setState( {error}));
        });
    }

    updateItemData = itemData => {
        this.setState( {
            items: itemData.item,
            isLoading: false,
            pagination: itemData.pagination,
        })
    }

    handlePageChange = (event, data) => {
        this.loadItems(data.activePage);
    }

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage />
                <Headers>
                    
                </Headers>

            </React.Fragment>
        )
    }
}