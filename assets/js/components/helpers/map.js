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

const getLatLngBoundsFromSearchResults = (results) => {
    const lats = results.map(result => result.latitude);
    const lngs = results.map(result => result.longitude);
    const maxLng = lngs.reduce((a, b) => Math.max(a, b));
    const minLng = lngs.reduce((a, b) => Math.min(a, b));
    const maxLat = lats.reduce((a, b) => Math.max(a, b));
    const minLat = lats.reduce((a, b) => Math.min(a, b));
    return [[minLng, minLat], [maxLng, maxLat]];
}

export const getBoundingBoxFromSearchResult = result => ({
    longitude: Number(result.longitude),
    latitude: Number(result.latitude),
    zoom: 9,
});

export const getBoundingBoxFromSearchResults = (viewport, results) => {
    if (results.length === 1) {
        return getBoundingBoxFromSearchResult(results[0]);
    }

    const bounds = getLatLngBoundsFromSearchResults(results);

    try {
        return new WebMercatorViewport(viewport).fitBounds(bounds, {
            padding: 20,
            offset: [-100, -100],
        });
    } catch (error) {
        console.log(error);
    }
};

export const getBoundingBoxCenteredAroundSearchResult = (viewport, results, center) => {
    if (results.length === 1) {
        return getBoundingBoxFromSearchResult(results[0]);
    }

    let [[minLng, minLat], [maxLng, maxLat]] = getLatLngBoundsFromSearchResults(results);
    const centerLng = Number(center.longitude);
    const minLngDistToCenter = Math.abs(minLng - centerLng);
    const maxLngDistToCenter = Math.abs(maxLng - centerLng);
    const centerLngDistToEdge = (Math.abs(minLngDistToCenter) + Math.abs(maxLngDistToCenter)) / 2;
    const lngOffset = Math.abs(centerLngDistToEdge - minLngDistToCenter);

    if (minLngDistToCenter < maxLngDistToCenter) {
        minLng -= lngOffset;
        maxLng -= lngOffset;
    } else {
        minLng += lngOffset;
        maxLng += lngOffset;
    }

    const centerLat = Number(center.latitude);
    const minLatDistToCenter = Math.abs(minLat - centerLat);
    const maxLatDistToCenter = Math.abs(maxLat - centerLat);
    const centerLatDistToEdge = (Math.abs(minLatDistToCenter) + Math.abs(maxLatDistToCenter)) / 2;
    const latOffset = Math.abs(centerLatDistToEdge - minLatDistToCenter);

    if (minLatDistToCenter < maxLatDistToCenter) {
        minLat -= latOffset;
        maxLat -= latOffset;
    } else {
        minLat += latOffset;
        maxLat += latOffset;
    }

    const bounds = [[minLng, minLat], [maxLng, maxLat]];

    try {
        return (new WebMercatorViewport(viewport)).fitBounds(bounds, {
            padding: 20,
            offset: [-100, -100],
        });
    } catch (error) {
        console.log(error);
    }
};
