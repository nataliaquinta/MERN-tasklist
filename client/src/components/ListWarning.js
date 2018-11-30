import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ListWarning extends Component {
   

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
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items
                    .filter(items => {
                        if(items.color === 'warning') {
                            return items.color = 'warning';
                        }
                         
                      })
                    .map(({_id, name, color}) => ( //MongoDB uses _id for id
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

ListWarning.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
    item: state.item //item = stateReducer
});

export default connect(mapStatetoProps, {getItems, deleteItem})(ListWarning);


