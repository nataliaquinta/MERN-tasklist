import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import {Provider} from 'react-redux';
import {Route, Link,HashRouter } from "react-router-dom";

import store from './store';
import ItemModal from './components/itemModal';
import {Container, Button, ButtonGroup} from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';
import ListDanger from './components/ListDanger';
import ListInfo from './components/ListInfo';
import ListSecondary from './components/ListSecondary';
import ListSuccess from './components/ListSuccess';
import ListWarning from './components/ListWarning';

const Primary = () => <ShoppingList/>;
const Success = () => <ListSuccess/>;
const Info = () => <ListInfo/>;
const Warning = () => <ListWarning/>;
const Danger = () => <ListDanger/>;
const Secondary = () => <ListSecondary/>;

class App extends Component {
  render() {
    return (

      <Provider store={store}>



      <div className="App">

      <AppNavbar />

      <Container>

      <ItemModal />

      <HashRouter>

      <div >
      <ButtonGroup className ="legend">

      <Link to="/"><Button color="primary"> Show all </Button></Link>
      <Link to="/SAR"><Button color="success">SAR</Button></Link>
      <Link to="/OPAMP"><Button color="info">OPAMP</Button></Link>
      <Link to="/DAC"><Button color="warning">DAC</Button></Link>
      <Link to="/SDM"><Button color="danger">SDM</Button></Link>
      <Link to="/TOPLVL"><Button color="secondary">TOPLVL</Button></Link>
      </ButtonGroup>
                  
      <Route exact path="/" component={Primary} />
      <Route path="/SAR" component={Success} />
      <Route path="/OPAMP" component={Info} />
      <Route path="/DAC" component={Warning} />
      <Route path="/SDM" component={Danger} />
      <Route path="/TOPLVL" component={Secondary} />

      </div>
            </HashRouter>

      
        
      </Container>
     
      </div>


      </Provider>

    );
  }
}

export default App;

// 1- create a component for each list
// 2 -install react router
// 3 -route each component to the button