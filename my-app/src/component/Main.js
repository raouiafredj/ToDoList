import React, { Component } from 'react';
import {connect} from 'react-redux';
import './file.css';


    class Main extends Component {
        
        render() {
            
            return (
                <div className="container ">
		
        <div className="list-item ">
                    <div className="mainlist  loading" style={{marginLeft:'500px'}}>
                     
               {this.props.todo.map(el=>{return(<div className="mylist ">
                   <li className="list-group list-group-flush  " 
               key={el.id} >
                   
 <input className="status  " type="checkbox" title="Mark as complete"/>
<span className="item ">{el.inputValue}</span>

</li>

<span className=" remove-item " onClick={()=>{this.props.remove(el.id)}}>

</span>

 {/* <button className="  " onClick={()=>{this.props.onEdit(el.id)}}>

 </button> */}


</div> )} )}
             
 </div>                
 </div>
 
  
                </div>
                
           
        
               
            




            
            );
        }
    }
           
      
const mapStateToProps=(state)=>{

 return {
    
    todo:state.main
 }

}

const mapDispatchToProps = (dispatch)=>{

    return {

        remove:(id)=>{

            dispatch({type:'REMOVE_INPUT',id:id})
         }
        // onEdit: (todo,text) => {
           
        //     dispatch({
        //         type: 'EDIT_INPUT',
        //         id: todo.id,
        //         inputValue:todo.inputValue,
               
        //         todo: {
        //             id: todo.id,
                  
        //             inputValue: prompt('Value: ',text),
                   
                    
        //         }
        //     })
        // }

       
       

    }
    


}


const MainContainer =connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainContainer;