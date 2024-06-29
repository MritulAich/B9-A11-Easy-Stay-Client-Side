import { Map, Marker } from "pigeon-maps"

const Location = () => {
    return (
        <div className="mb-8">
            <Map height={300} defaultCenter={[29.117151854214754, 110.47877929663593]} defaultZoom={14}>
                <Marker width={50} anchor={[29.117151854214754, 110.47877929663593]} />
            </Map>
        </div>
    );
};

export default Location;