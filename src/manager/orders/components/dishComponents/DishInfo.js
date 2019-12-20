import React from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
 

const DishInfo = props => {
    const {
        dishID,
        productName,
        quantity,
        singleItemPrice,
        isLoading,
    }

    return (
        <Container >
            <Segment loading={isLoading} >
                <Table >
                <Table.Header >
                    <Table.Row>
                    <Table.HeaderCell>
                    Dish ID
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                    Product Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                    Quantity 
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                    Item Price
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                    More
                    </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body >
                    <Table.Row>
                    <Table.Cell>
                    {  dishID}
                    </Table.Cell>
                    <Table.Cell>
                    { productName}
                    </Table.Cell>
                    <Table.Cell>
                    { quantity}
                    </Table.Cell>
                    <Table.Cell>
                    {`$${ singleItemPrice}`}
                    </Table.Cell>
                    <Table.Cell>
                        <Button as={Link} to={`${currentPath}/edit`}>
                            Edit
                        </Button>
                        <Button loading={isDeleting} onClick={deleteItem}>
                            Delete
                        </Button>
                        <Button as={Link} to="/orders">
                            Back
                        </Button>
                    </Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </Segment>
        </Container>
    )
}