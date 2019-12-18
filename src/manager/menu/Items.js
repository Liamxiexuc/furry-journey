import React from 'react';
import {Container, Segment, Pagination, Button, Header, Table, Grid} from 'semantic-ui-react';
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
            itemCategories: []
            
        };
        
    }

    componentDidMount() {
        //this.loadItems();    
        this.setState({ isLoading: true}, () => {
            fetchItems()
                .then(itemData  => {
                    this.setState(
                       
                        {
                        isLoading: false,
                        items: itemData.data,
                    },
 
                    );
                })
                .catch(error =>
                    this.setState({
                        error, 
                        isLoading: false
                    }, 
                    error => {
                        this.props.history.push({ 
                            pathname: ERROR_URL, 
                            state: {error}
                        });
                    }));
            });
        
    }
    

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Grid className="admin-grid" columns="two" >
                    <Grid.Row >
                        <Grid.Column>
                            <Header className="admin-header--item" as="h1">
                                Dishes
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Button className="admin-header--create-button" as={Link} to={`${currentPath}/new`} >
                            Create a New Dish
                        </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Container className="admin-item-container">
                    <Segment className="admin-item-container-inner" basic loading={this.state.isLoading} >
                        <FlexContainer justifyContentValue = "space-between">
                        <Table className="item-table-card" >
                            <Table.Header className="item-table-header">
                                <Table.Row className="item-table-header-col">
                                    <Table.HeaderCell className="header-label">Dish Reference</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Name</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Price</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Category</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Dish Information</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">More</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body className="admin-table-body">
                                {this.state.items.map(item => (
                                    <ItemRow 
                                        productName={item.productName}
                                        price={item.price}
                                        productType={item.productType}
                                        productInfo={item.productInfo}
                                        category={item.category}
                                        id={item._id}
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