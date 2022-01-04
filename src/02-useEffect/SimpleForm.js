import React,{useEffect, useState} from 'react';
import './Form.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [form, setForm] = useState({
        nombre: '',
        correo: ''
    });

    const {nombre, correo} = form;

    useEffect(()=>{
       /*  console.log('hey'); */
    }, [])

    useEffect(()=>{
        /* console.log('nombre cambió'); */
    }, [nombre])
    /* disparamos el hook de useEffect cuando cambie el campo del nombre */

    useEffect(()=>{
        /* console.log('correo cambió'); */
    }, [correo])
    /* disparamos el hook de useEffect cuando cambie el campo del correo */


    const handleInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <>
           <h1>useEffect</h1>
           <div className='form-group mb-3'>
               <input 
                    className='form-control'
                    type='text'
                    name='nombre'
                    placeholder='Nombre'
                    autoFocus
                    autoComplete='off'
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input 
                    className='form-control'
                    type='text'
                    name='correo'
                    placeholder='Correo'
                    autoComplete='off'
                    value={correo}
                    onChange={handleInputChange}
                />
            </div>

            {( nombre === 'sergio' ) && <Message nombre={nombre} />}
            {/* mostraremos el componente de <Message /> solo si
            el nombre es igual a sergio*/}

        </>
    )   
}
