import 'leaflet/dist/leaflet.css';
import styles from './PetMap.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';

function CenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 15);
  }, [lat, lng, map]);
  return null;
}

export default function PetMap({
  lat,
  lng,
  petName = 'Pet Location',
  onPopupClick,
}) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <div
            onClick={onPopupClick}
            style={{ cursor: 'pointer' }}
            title="Click to expand map"
          >
            <strong>{petName}</strong>
            <br />
            <em>Last Reported Location</em>
          </div>
        </Popup>
      </Marker>

      <CenterMap lat={lat} lng={lng} />
    </MapContainer>
  );
}
