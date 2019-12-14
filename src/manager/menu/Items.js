import React from 'react';
import {Container, Segment, Pagination, Button, Header, Table} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import ItemRow from './components/ItemRow';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer';

import { ERROR_URL } from "../../route/URLMap";
import { ITEM_BASE_URL } from '../../route/URLMap';
import './styles/item.scss';
import { fetchItems } from '../../utils/api/item';

class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoading: false,
            error: null,
            pagination: {},
            
        };
        
    }

    componentDidMount() {
        //this.loadItems();    
        this.setState({ isLoading: true}, () => {
            fetchItems()
                .then(itemData => {
                    console.log(itemData);
                    this.setState({
                        isLoading: false,
                        items: itemData.data
                    });
                })
                .catch(error =>
                    this.setState({error, isLoading: false}, error => {
                        this.props.history.push({ pathname: ERROR_URL, state: {error}});
                    }))
            })
        
    }

    // loadItems = (pageNum, pageSize) => {
    //     this.setState({ isLoading: true, items: []}, ()=> {
    //         fetchItems(pageNum, pageSize)
    //             .then(this.updateItemData)
    //             .catch(error => this.setState({error}));
    //     });
        
    // }



    // updateItemData = itemData => {
    //     console.log(itemData);
    //     this.setState({
            
    //         items: itemData.data,
    //         isLoading: false,
    //         pagination: itemData.pagination,
    //     })
        
    // }

    // handlePageChange = (event, data) => {
    //     this.loadItems(data.activePage);
    // }

    

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2">
                    Dishes
                </Header>
                <Container >
                    <Button as={Link} to={`${currentPath}/new`} >
                        Create a New Dish
                    </Button>
                    <Segment basic loading={this.state.isLoading} >
                        <FlexContainer justifyContentValue = "space-between">
                        <Table className="item-table-card" >
                            <Table.Header className="item-table">
                                <Table.Row className="item-table-header">
                                
                                    <Table.HeaderCell className="header-label">Dish Name</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Price</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Category</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Information</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">More</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {this.state.items.map(item => (
                                    <ItemRow 
                                        productName={item.productName}
                                        price={item.price}
                                        productType={item.productType}
                                        productInfo={item.productInfo}
                                        category={item.category}
                                        key={item._id}
                                        to={`${ITEM_BASE_URL}/${item._id}`}
                                    />
                                ))}                            
                            </Table.Body>    

                        </Table>

                        </FlexContainer>
                    </Segment>
                    {/* {
                        this.state.pagination.page && (
                            <FlexContainer >
                                <Pagination 
                                    activePage={this.state.pagination.page}
                                    disabled={this.state.isLoading}
                                    onPageChange={this.handlePageChange}
                                    totalPages={this.state.pagination.pages}
                                />
                            </FlexContainer>
                        )
                    } */}
                </Container>    
            </React.Fragment>
        );
    }
};

export default Items;