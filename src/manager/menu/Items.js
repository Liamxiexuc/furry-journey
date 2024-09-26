import React from 'react';
import {Container, Segment, Button, Header, Table, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import ItemRow from './components/ItemRow';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer';
import ItemSearch from './components/ItemSearch';
import { ERROR_URL } from "../../route/URLMap";
import { ITEM_BASE_URL } from '../../route/URLMap';
import './styles/item.scss';
import { fetchItems, fetchItemById  } from '../../utils/api/item';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            error: null,
            pagination: {},
            itemCategories: [],
            itemSearch: '',            
        };       
    }

    componentDidMount() {
        const itemInput = this.props.match.params.itemSearch;   
        this.setState({ isLoading: true}, () => {
            if (itemInput) {
                this.handleSearch();
            }
            if(!itemInput) { 
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
            } 

            });    
    }

    handleInputChange = event => {
        this.setState({itemSearch: event.target.value});
    }
    
    handleSearch = () => {        
        fetchItemById(this.state.itemSearch)
            .then(itemData => this.setState (               
                {
                    isLoading: false,
                    items: [itemData],
            },
            
            ))
            .catch(error => this.setState({ error }));
    }

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Grid className="admin-grid" columns="two" >
                    <Grid.Row className="admin-grid-row">
                        <Grid.Column className="admin-grid-col">
                            <Header className="admin-header--item" as="h1">
                                Dishes
                            </Header>
                        </Grid.Column>
                        <Grid.Column className="admin-header-button">
                            
                        <Button className="admin-header--create-button" as={Link} to={`${currentPath}/new`} >
                            Create a New Dish
                        </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid className="admin-search" columns="1">
                    <Grid.Row className="admin-search-row">
                       <ItemSearch                           
                            handleSearch={this.handleSearch}
                            handleInputChange={this.handleInputChange}
                            itemSearch={this.state.itemSearch}
                       /> 
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
                </Container>    
            </React.Fragment>
        );
    }
};

export default Items;