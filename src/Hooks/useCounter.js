import {useState} from 'react';

export const useCounter = (initialState = 1) => {
    /* definimos el useCounter y en los parametros
    definimos el valor de 0, por si no se manda ningun valor */

    const [state, setState] = useState(initialState);
    /* creamos un hook de useState */

    const increment = () => setState(state+1);
    /* en una constante increment haremos referencia a la funcion 
    de setState con el nuevo valor del state+1 */

    const decrement = () => setState(state-1);
    /* en una constante decrement haremos referencia a la funcion 
    de setState con el nuevo valor del state-1 */

    const reset = () => setState(initialState);
    /* en una constante reset haremos referencia a la funcion 
    de setState con el nuevo valor del state a initialState */

    /* return {
        state,
        decrement,
        increment,
        reset
        /* retornaremos el valor del state del hook useSate, y las funciones
        para incrementar, decrementar y reset 
    }; */

    return {
        state,
        reset,
        increment,
        decrement
    };
}
