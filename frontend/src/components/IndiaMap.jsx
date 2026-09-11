import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function IndiaMap() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[12.9716, 77.5946]}>
        <Popup>Karnataka Beneficiaries</Popup>
      </Marker>

      <Marker position={[13.0827, 80.2707]}>
        <Popup>Tamil Nadu Beneficiaries</Popup>
      </Marker>

      <Marker position={[19.076, 72.8777]}>
        <Popup>Maharashtra Beneficiaries</Popup>
      </Marker>
    </MapContainer>
  );
}

export default IndiaMap;