import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button, ButtonGroup} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
   

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

render() {
    //this.props.item.items where item is the object, items is the array
    const { items } = this.props.item;
    return(



        <Container> 
            <div className="legend" >
            <ButtonGroup>
                <Button color="success">SAR</Button>
                <Button color="info">OPAMP</Button>
                <Button color="warning">DAC</Button>
                <Button color="danger">SDM</Button>
                <Button color="secondary">TOPLVL</Button>
                </ButtonGroup>

        </div>
          
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items.map(({_id, name, color}) => ( //MongoDB uses _id for id
                        <CSSTransition key={_id} timeout={500} classNames="fade">

                        <ListGroupItem color={color} >
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                            >
                            &times;
                                </Button>

                            {name}

                            
                            </ListGroupItem>

                            
                        </CSSTransition>
                    ))
                    }
                    </TransitionGroup>
                </ListGroup>
        </Container>
    );
}
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
    item: state.item //item = stateReducer
});

export default connect(mapStatetoProps, {getItems, deleteItem})(ShoppingList);