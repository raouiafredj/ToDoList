import React, { Component } from 'react';
import {connect} from 'react-redux'
import './file.css';


class ToDo extends Component {
    render() {
        return (
            <div class="to-do-list">
    <div class="list-title">My To-Do List</div>
    <hr/>
    
    <div class="list-body"></div>
          <div class="container">
            <div className="input-group">
            <hr/>
            
             <input type="text" id="txtItem" className="form-control" onChange={(e)=>{this.props.hundelchange(e.target)}}/>
             <div className="input-group-append">
             <button id="add" className="btn btn-outline-secondary" onClick={()=>{this.props.add(this.props.input)}}>ADD</button> 
            
            </div>
            </div>
            </div>
            
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{

  return{

      hundelchange:(target)=>{

         dispatch({type:'SET_INPUT',value:target.value})

      },

      add:(input)=>{
        let obj,
        inputValue=input,
        id=Math.floor(Math.random()*1000)
        obj={inputValue,id}
        dispatch({type:'ADD_INPUT',value:obj})
      },

     
  }

}


const mapStateToProps=(state)=>{

 return{

   input:state.input

 }   


}

const ToDoContainer =connect(mapStateToProps, mapDispatchToProps)(ToDo)
export default ToDoContainer ;