
export const tareasReducer = (state=[], action) =>{

    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        
        case 'delete':
            return state.filter( tarea => tarea.id !== action.payload );
        
        case 'toogle':
            return state.map( tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        done: !tarea.done
                    }
                } else {
                    return tarea
                }
            })

        default:
            return state;
    }

}