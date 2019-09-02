




const mainReducer =(state=[],action)=>{

   if(action.type==='ADD_INPUT'){

    return state=[...state,action.value]

   }

  if(action.type==='REMOVE_INPUT'){

     return state.filter(el=>el.id!==action.id)

  }
  if(action.type === 'EDIT_INPUT') {
   return state.map(m => {
       if(m.id === action.id) {
           return action.value
       }
      
       return m
   })
}
return state

}

export default mainReducer