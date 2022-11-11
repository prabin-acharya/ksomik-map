import { GoogleMap, useLoadScript } from "@react-google-maps/api";


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });


  if (!isLoaded) return <div>Loading....</div>
  return <Map />
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
    >
    </GoogleMap>
  );
}
