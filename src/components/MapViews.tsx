/* eslint import/no-webpack-loader-syntax: off */

import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Loading } from './';
import {Map} from 'mapbox-gl';



export const MapViews = () => {

    const { isLoading, userLocation } = useContext( PlacesContext );
    const { setMap } = useContext( MapContext)

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if ( !isLoading ) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9 // starting zoom
                });
            setMap( map );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isLoading ])


    if ( isLoading ) {
        return ( <Loading /> )
    }


    return (
        <div ref={ mapDiv }
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
            { userLocation?.join(',') }
        </div>
    )
}