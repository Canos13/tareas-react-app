import React, { useEffect, useState } from 'react';

export const Message = ({nombre}) => {
    const [Coords, setCoords] = useState({
        x:0,
        y:0
    })
    /* hacemos uso del hook useSate que tendrá 
    de initialstate un objeto */

    const {x,y} = Coords;
    /* desestructuramos el objeto coords para 
    usarlos directamente despues */

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {
                x: e.x, 
                y: e.y
            }
            /* creamos un objeto llamado coords donde sus valores
            seran asignados mediante las cordenadas */
            setCoords(coords);
            /* cambiamos el estado con la funcion del setCoords y 
            mandamos como nuevo valor el objeto que creamos anteriormente */
            console.log('Componente montado');
            /* mostramos un mensaje en consola 
            para saber que el componente se montó */
        }

        window.addEventListener('mousemove', mouseMove);
        /* cuerpo del useEffect, cuando se carga el actual
        componente (Message) se ejecuta la funcion de arriba
        window.addEven... */
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('Componente desmontado');
            /* Cuando el componente ya no se carga se regresa la funcion
            de arriba, es decir que el componente se desmontó */
        }
    }, [])
    /* cuando se carga el componente se manda a llamar el hook useEffect */

    return (
        <>
            <h1> {nombre} eres genial</h1> 
            <h2> Cordenada x:{x} </h2>
            <h2> Cordenada y:{y} </h2>
        </>
    )
}
