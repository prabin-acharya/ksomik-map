import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });


  if (!isLoaded) return <div>Loading....</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
    >

      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}
