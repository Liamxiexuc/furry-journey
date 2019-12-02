import React from 'react';
import { createItem } from "../../utils/api/item";


class ItemNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreating: false,
            item: {

            }
        }
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(state => ({ item: {
            ...state.item,
            [name]: value,
        }
        }));
    }

    handleSubmit = () => {
        const item = this.state.item;
        this.setState({ isCreating: true}, () => {
            createItem()
        })
    }
}

export default ItemNew;