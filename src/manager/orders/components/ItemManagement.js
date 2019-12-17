// import React from 'react';
// import { Button, Modal } from 'semantic-ui-react';

// import PersonManagement from '../../../UI/personManagement/PersonManagement';
// import {
     
//     fetchItems,
     
// } from '../../../utils/api/item';

// class ItemManagement extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             error: null,
//             isActionSuccessful: false,
//             isAddingOrRemoving: false,
//             isSearching: false,
//             pagination: {},
//             itemToAdd: '',
//             itemToRemove: '',
//             items: [],
//         };
//     }

//     searchItem = query => {
//         this.setState({ isSearching: true }, () => {
//             fetchItems(1, 100, query)
//                 .then(itemData => this.setState({
//                     isSearching: false,
//                     pagination: itemData.pagination,
//                     lecturers: itemData.items,
//                 }))
//                 .catch(error => this.setState({ error }));

//         });
//     }

//     setItemToAdd = itemToAdd => this.setState({ itemToAdd, isActionSuccessful: false })

//     setItemToRemove = itemToRemove => this.setState({ itemToRemove, isActionSuccessful: false })

//     handleSuccess = () => {
//         this.setState({ isAddingOrRemoving: false, isActionSuccessful: true });
//         this.props.reloadPage(this.props.itemId);
//     }

//     addItem = () => {
//         this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
//             addItemToOrder(this.state.itemToAdd, this.props.itemId)
//                 .then(this.handleSuccess)
//                 .catch(error => this.setState({ error }));
//         });
//     }

//     removeItem = () => {
//         this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
//             removeItemToOrder(this.state.itemToRemove, this.props.itemId)
//                 .then(this.handleSuccess)
//                 .catch(error => this.setState({ error }));
//         });
//     }

//     render() {
//         return (
//             <Modal
//                 trigger={<Button positive>Manage Dishes</Button>}
//             >
//                 <PersonManagement
//                     error={this.state.error}
//                     handleAdd={this.addItem}
//                     handlePersonToAddChange={this.setItemToAdd}
//                     handlePersonToRemoveChange={this.setItemToRemove}
//                     handleRemove={this.removeItem}
//                     handleSearchChange={this.searchItem}
//                     isActionSuccessful={this.state.isActionSuccessful}
//                     isAddingOrRemoving={this.state.isAddingOrRemoving}
//                     isSearching={this.state.isSearching}
//                     personsToAdd={this.state.stems}
//                     personsToRemove={this.props.selectedItems}
//                     personToAdd={this.state.itemToAdd}
//                     personToRemove={this.state.itemToRemove}
//                 />
//             </Modal>
//         );
//     }
// }

// export default ItemManagement;

