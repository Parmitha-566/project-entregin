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

      <Marker position={[28.6139, 77.2090]}>
  <Popup>
    Delhi<br />
    Beneficiaries: 18,500
  </Popup>
</Marker>

<Marker position={[19.0760, 72.8777]}>
  <Popup>
    Mumbai<br />
    Beneficiaries: 15,200
  </Popup>
</Marker>

<Marker position={[12.9716, 77.5946]}>
  <Popup>
    Bengaluru<br />
    Beneficiaries: 21,400
  </Popup>
</Marker>

<Marker position={[13.0827, 80.2707]}>
  <Popup>
    Chennai<br />
    Beneficiaries: 12,700
  </Popup>
</Marker>

<Marker position={[17.3850, 78.4867]}>
  <Popup>
    Hyderabad<br />
    Beneficiaries: 16,300
  </Popup>
</Marker>

<Marker position={[22.5726, 88.3639]}>
  <Popup>
    Kolkata<br />
    Beneficiaries: 14,900
  </Popup>
</Marker>

<Marker position={[23.0225, 72.5714]}>
  <Popup>
    Ahmedabad<br />
    Beneficiaries: 10,800
  </Popup>
</Marker>

<Marker position={[18.5204, 73.8567]}>
  <Popup>
    Pune<br />
    Beneficiaries: 11,600
  </Popup>
</Marker>

<Marker position={[9.9312, 76.2673]}>
  <Popup>
    Kochi<br />
    Beneficiaries: 8,400
  </Popup>
</Marker>

<Marker position={[26.9124, 75.7873]}>
  <Popup>
    Jaipur<br />
    Beneficiaries: 9,200
  </Popup>
</Marker>
    </MapContainer>
  );
}

export default IndiaMap;