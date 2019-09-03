import keyBy from 'lodash.keyby';

export const transformGuides = guidesFromApi => {
    let guides = [...guidesFromApi];
    guides.forEach((guide, i) => {
        const towns = guide.towns.map(town => ({
            name: town.title,
            _geoloc: {
                lat: parseFloat(town.latitude, 10),
                lng: parseFloat(town.longitude, 10),
            },
            state: town.states,
            ...town,
        }));
        guide.towns = towns;
    });

    guides = keyBy(guides, 'id');
    console.log(guides);
    return guides;
};
