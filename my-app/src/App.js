import React, { Component } from 'react';
import Input from './component/Input';
import Main from './component/Main';
import AppStore from './store';
import {Provider} from 'react-redux';
import './App.css';
import ToDo from './component/ToDo';

class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
     
<ToDo/>
        {/* <Input className="TodoList"/> */}
        <Main />

 </Provider>
 
    );
  }
}

export default App;