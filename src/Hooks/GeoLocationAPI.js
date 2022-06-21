import {useState, useEffect} from 'react'

const GeoLocationAPI = () => {

    const [Location, setLocation] = useState({
        loaded: false,
        coordinates: {lat : '', lng: ''}
    });

    const onSuccess = Location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: Location.coords.latitude,
                lng: Location.coords.longitude
            }
        })
    }

    const onError = error => {
         setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported or denied",
            });
        }


        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[])

  return Location;
}

export default GeoLocationAPI;
