import React from "react";
import { Route } from "react-router-dom";
import ItemCard from "./components/ItemCard";
import FlexContainer from "../../UI/flexContainer/FlexContainer";
import { fetchItems } from "../../utils/api/item";
import { ErrorMessage } from "../../UI/errorMessage/ErrorMessage";
import { Segment } from "semantic-ui-react";

import "./styles/items.scss";

class Items extends React.Component {
  //    history 仅限于传给它的一级使用
  // const { history } = props;
  // history.push('/home');
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      fetchItems()
        .then(itemData => {
          this.setState({
            isLoading: false
            //items: itemData.items,
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    });
  }

  render() {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <Segment basic loading={this.state.isLoading}>
          <FlexContainer justifyContentValue="space-between">
            <p>This is Items page </p>
            {this.state.items.map(item => (
              <ItemCard
                key={item.id}
                itemName={item.name}
                itemDescription={item.description}
              />
            ))}
          </FlexContainer>
        </Segment>
      </div>
    );
  }
}

export default Items;
