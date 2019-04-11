import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

let staticBreadcrumbs: FeatureCollection<Geometry, GeoJsonProperties>;

staticBreadcrumbs = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [-117.14024305343628, 32.81294345855713]
            }
        },
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'GeometryCollection',
                geometries: [
                    {
                        type: 'Point',
                        coordinates: [-117.14024305343628, 32.81294345855713]
                    }
                ]
            }
        },
    ]
};

const geometry = staticBreadcrumbs.features[0].geometry;

if (geometry.type === 'Point') {
    const coordinates00 = geometry.coordinates[0];
    const coordinates01 = geometry.coordinates[1];
}

