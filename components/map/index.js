import React, {useMemo, useRef, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from "next/link";
function DraggableMarker(){
    const [position, setPosition] = useState({lat:35.5501, lng:51.5150})
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )

    return (
        <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
        </Marker>
    )
}

export default function Map(){
    return (
        <>
            <div className={"flex justify-between w-full"}>
                <Link href={"/home"}>
                    <img src="close.png" alt=""/>
                </Link>
                <Link href={"/home"}>
                    <img src="back.png" alt=""/>
                </Link>
            </div>
             <MapContainer center={[35.5501, 51.5150]} zoom={15} style={{ height: '400px' }}>
                 <TileLayer
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 />
                 <Marker position={[51.505, -0.09]}>
                    <Popup>
                         A pretty CSS3 popup. <br /> Easily customizable.
                     </Popup>
                 </Marker>
                 <DraggableMarker />
             </MapContainer>  
        </>
    )
}