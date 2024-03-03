import { useState } from "react";

const useGeolocaton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const getPosition = () => {
        if (!navigator.geolocation) return setError("Your browser does not suppot geolocation");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            });
            setIsLoading(false);
        },
            (err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }

    return { isLoading, position, error, getPosition }
}

export default useGeolocaton;