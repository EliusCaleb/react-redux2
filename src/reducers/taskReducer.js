

const intialState = {
     tasks: []
}


const taskReducer  = ( state = intialState, action)=>{
      switch(action.type){

         case ' ADD_TASK':
          return  {
              ...state,
              tasks: [state.task, action.payload ]
         }

         case ' DELETE_TASK':
          return  {
              ...state,
              tasks:  state.tasks.filter(  task => task.id !== action.payload)
         }
         default :
            return state
        
          
      }


}

export  default  taskReducer
