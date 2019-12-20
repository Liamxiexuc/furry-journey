import React from 'react';
import '../styles/item_search.scss'

const ItemSearch = props => {
    return (
        <div className="admin-item-search">
            <input
                className="admin-search-input"
                onChange={props.handleInputChange}
                value={props.input}
            />
            <button class="admin-search-button" onClick={props.handleSearch}>
                Search By ID
            </button>

        </div>
    )
}

export default ItemSearch;