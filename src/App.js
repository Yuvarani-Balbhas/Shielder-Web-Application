import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';
import rootReducer from './reducer';
import './App.css';
import login from "./login";
import VisitorManagement from "./visitormanagement";
import DailyEntry from "./dailyEntry";
import registration  from "./registration";
import Certification  from "./certification";
import Cleaning  from "./cleaning";
import addEmployee from "./addEmployee";
import addFacility from "./addFacility";
import addBlock from "./addBlock";
import addVehicle from "./addVehicle";
import reportIncident from "./report Incident";
import AssignRole from "./assignrole";
import CreateRole from "./createrole";
import Test from "./test";
import SelfDeclaration from "./selfdeclaration";
import Profile from "./profile";
import Task from "./task";
import MenuBar from "./components/menu";



class App extends Component {
  render () {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      applyMiddleware(thunk, sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga());
    return (<Provider store={store}>
      <Router>

        <Route path="/" component={login} exact />
        <Route path="/login" component={login} exact />
        <Route path="/visitormanagement" component={VisitorManagement} exact />
        <Route path="/dailyEntry" component={DailyEntry} exact />
        <Route path="/registration" component={registration } exact />
        <Route path="/certification" component={Certification } exact />
        <Route path="/cleaning" component={Cleaning } exact />
        <Route path="/addEmployee" component={addEmployee} exact />
        <Route path="/addFacility" component={addFacility} exact />
        <Route path="/addBlock" component={addBlock} exact />
        <Route path="/addVehicle" component={addVehicle} exact />
        <Route path="/reportIncident" component={reportIncident} exact />
        <Route path="/assignrole" component={AssignRole} exact/>
        <Route path="/createrole" component={CreateRole} exact/>
        <Route path="/test" component={Test} exact/>
        <Route path="/selfdeclaration" component={SelfDeclaration} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/task" component={Task} exact/>
        <Route path="/components/menu" component={MenuBar} exact/>
      
      
        
      
      </Router>
    </Provider>);
  };
}

export default App;
 