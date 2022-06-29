import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './views';

import './styles.css';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    )
}