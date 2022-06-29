import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';


export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext( MapContext );
    const { userLocation } = useContext( PlacesContext)


    const onClick = () => {
        if ( !isMapReady ) throw new Error('Mapa no está listo');
        if ( !userLocation ) throw new Error('No hay ubicación de usuario');

        map?.flyTo({
            // center: userLocation,
            zoom: 2,
            center: [
            -74.5 + (Math.random() - 0.5) * 10,
            40 + (Math.random() - 0.5) * 10
            ],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    }


    return (
        <button 
            className="btn btn-primary"
            onClick={ onClick }
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
        >
            Mi Ubicación
        </button>
    )
}