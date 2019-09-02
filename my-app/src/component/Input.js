import React, { Component } from 'react';
import {connect} from 'react-redux'
import './file.css';

class Input extends Component {
    render() {
        return (
          <div class="container">
            <div className="input-group">
            
             <input type="text" id="txtItem" className="form-control" onChange={(e)=>{this.props.hundelchange(e.target)}}/>
             <div className="input-group-append">
             <button id="add" className="btn btn-outline-secondary" onClick={()=>{this.props.add(this.props.input)}}>ADD</button> 
             {/* <button id="add" className="btn btn-outline-secondary"
                onClick={() =>{this.props.onEdit(this.props.input)} } >
                Edit
            </button> */}
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
        let obj:{},
        inputValue=input,
        id=Math.floor(Math.random()*1000)
        obj={inputValue,id}
        dispatch({type:'ADD_INPUT',value:obj})
      },

      onEdit: (input) => {
        let obj:{},
        
        id=Math.floor(Math.random()*1000)
        obj={id}
        dispatch({
            type: 'EDIT_INPUT',
            
            input: {
                id: input.id,
                title: prompt(' title: ',input.obj),
                
            }
        })
    }

  }

}


const mapStateToProps=(state)=>{

 return{

   input:state.input

 }   


}

const InputContainer =connect(mapStateToProps, mapDispatchToProps)(Input)
export default InputContainer ;