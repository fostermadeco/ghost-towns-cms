import WebMercatorViewport from 'viewport-mercator-project';

export const getBoundingBoxFromHit = hit => ({
    longitude: hit._geoloc.lng,
    latitude: hit._geoloc.lat,
    zoom: 9,
});

export const getBoundingBoxFromHits = (viewport, hits) => {
    if (hits.length === 1) {
        return getBoundingBoxFromHit(hits[0]);
    }

    const coords = hits.map(hit => hit._geoloc);
    const lats = coords.map(coord => coord.lat);
    const lngs = coords.map(coord => coord.lng);
    const maxLng = lngs.reduce((a, b) => Math.max(a, b));
    const minLng = lngs.reduce((a, b) => Math.min(a, b));
    const maxLat = lats.reduce((a, b) => Math.max(a, b));
    const minLat = lats.reduce((a, b) => Math.min(a, b));
    const bounds = [[minLng, minLat], [maxLng, maxLat]];

    try {
        return new WebMercatorViewport(viewport).fitBounds(bounds, {
            padding: 20,
            offset: [-100, -100],
        });
    } catch (error) {
        console.log(error);
    }
};
