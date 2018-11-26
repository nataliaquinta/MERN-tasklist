import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '', 
            color:''
        };

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //this is to open the modal once the "add" button is clicked
    toggle = () => {
        this.setState( {
            modal: !this.state.modal
        });
    }

    //name input
    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         });
    }


    //form submit
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            color: this.state.color
        }
    
        //Add item via addItem action
        this.props.addItem(newItem);

        //then close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                color= "dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Task</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>
                Add to Tasklist
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="item">Task</Label>
                        <Input 
                        type="text"
                        name="name"
                        id="item"
                        placeholder="Add new task"
                        onChange={this.onChange}
                        />
                    </FormGroup>

                        <FormGroup>
                            <Label for="item">Select color</Label>
                            <Input 
                            type="select" 
                            name="color"
                            id="item-color"
                            defaultValue=""
                            onChange={this.onChange}
                            >
                            <option value="" disabled>Select Color</option>
                            <option value="success">Green</option>
                            <option value="info">Blue</option>
                            <option value="warning">Yellow</option>
                            <option value="danger">Red</option>
                            <option value="secondary">Grey</option>
                            </Input>
                            </FormGroup>

                    
                       
                        <Button
                        color="dark"
                        style={{marginTop: '2rem'}}
                        block
                        >Add Task</Button>
                    
                    </Form>
                </ModalBody>

                    </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);