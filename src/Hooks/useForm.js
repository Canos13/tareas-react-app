import {useState} from 'react';

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);
    /* hacemos uso del hook useState con un values 
    y una f para establecer los valores (setValues).
    Ademas ese hook tendrá de valor inicial el props que
    recibiremos, y si no recibimos nada el initialState 
    será un objeto vacio*/

    const reset = () => setValues(initialState);

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    /* Creamos una funcion llamada handleInpuChange donde
    cambiaremos el estado de values con el setValues */

    return [values, handleInputChange, reset];
    /* retornaremos el values y la funcion handleInputChange */
}
