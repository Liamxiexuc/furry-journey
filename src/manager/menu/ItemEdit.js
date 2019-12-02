import React from 'react';
import ItemForm from './components/ItemForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import { ITEM_BASE_URL} from '../route/URLMap';
import {fetchItemById, saveItemById} from '../utils/api/item';

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            error: null,
            productName: '',
            price: '',
            productType: '',
            productInfo: '',
            photo: '',
            category: '',
            isLoading: false,
            isSaving: false,
            
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.id;
        this.setState( {isLoading: true}, () => {
            fetchItemById(itemId)
                .then(item => this.setState ({
                    
                }))
        })
    }

    handleChange = () => {
        
    }

    handleSave = () => {

    }
}