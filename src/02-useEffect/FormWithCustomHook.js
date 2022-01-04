import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './Form.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        password: ''
    });
    /* haremos uso del customHook useForm donde le mandaremos
    un initialState en forma de un objeto, y recibiremos un 
    formValues y un handleInputChange */

    const {nombre, correo, password} = formValues;
    /* el formValues que recibimos lo desestructuramos
    para usar los valores directamente */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        /* esta function de handleSubmit, mostrará en 
        consola el objeto formValues */
    }

    return (
        <form onSubmit={handleSubmit}>
           <h1>FormWithCustomHook</h1>

           <div className='form-group mb-3' >
               <input 
                    className='form-control'
                    type='text'
                    name='nombre'
                    placeholder='Nombre'
                    autoFocus
                    autoComplete='off'
                    value={ nombre }
                    /* este elemento tendrá el valor de nombre, que fue
                    desestruturada del objeto FormValues, este FormValues fue
                    retornado de nuestro customHook useForm */
                    onChange={handleInputChange}
                    /* cuando cambie este elemento haremos uso del handleInputChange
                    que es la funcion que retorna el customHook useForm */
                />
            </div>

            <div className='form-group mb-3' >
                <input 
                    className='form-control'
                    type='text'
                    name='correo'
                    placeholder='Correo'
                    autoComplete='off'
                    value={ correo }
                    /* este elemento tendrá el valor de correo, que fue
                    desestruturada del objeto FormValues, este FormValues fue
                    retornado de nuestro customHook useForm */
                    onChange={handleInputChange}
                    /* cuando cambie este elemento haremos uso del handleInputChange
                    que es la funcion que retorna el customHook useForm */
                />
            </div>

            <div className='form-group mb-3'>
                <input 
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='off'
                    value={ password }
                    /* este elemento tendrá el valor de password, que fue
                    desestruturada del objeto FormValues, este FormValues fue
                    retornado de nuestro customHook useForm */
                    onChange={handleInputChange}
                    /* cuando cambie este elemento haremos uso del handleInputChange
                    que es la funcion que retorna el customHook useForm */
                />
            </div>

            <button type='submit' className='btn btn-success'>Enviar</button>
        </form> 
        /* a este Form se le agrega un f handleSubmit que se ejecutará cuando
        se haga submit en él*/
    )   
}
