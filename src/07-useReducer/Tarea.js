import React from 'react'

export const Tarea = ({tareas, i, handleToggle,handleDelete}) => {

    console.log('me volví a disparar')
    const {desc, id, done} = tareas;

    return (
        <li
            key={id}
            className='list-group-item d-flex flex-wrap align-items-center justify-content-between'
        >
             <p 
                className={`col-6 hand flex-wrap m-0 ${done && 'complete'}`} 
                onClick={()=> handleToggle(id)}
            >
                    {i+1}. {desc}
            </p>

            <button
                className={`btn btn-${done?'secondary':'primary'}`}
                onClick={ ()=> handleToggle(id)}
            ><i className={`${done?'fas fa-window-close':'far fa-check-square'}`}></i> {`${done?'Incompleto':'Hecho'}`}</button>
            
            <button
                className='btn btn-danger'
                onClick={ () => handleDelete(id) }
            ><i className="far fa-trash-alt"></i> Borrar</button>
        </li>
    )
}
