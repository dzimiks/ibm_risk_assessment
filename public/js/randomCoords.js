const fs = require('fs');
const ndjson = require('ndjson');

let coords = [];
const belgradeCoords = {
    lat: 44.787197,
    lon: 20.457273
};
const noviSadCoords = {
    lat: 45.267136,
    lon: 19.833549
};

coords.push({
    coords: [belgradeCoords.lat, belgradeCoords.lon]
}, {
    coords: [noviSadCoords.lat, noviSadCoords.lon],
});

for (let i = 0; i < 100; i++) {
    const rand = Math.sqrt((20 ** 2) / 2.0);
    coords.push({
        coords: [belgradeCoords.lat + rand, belgradeCoords.lon - rand]
    });
}

/**
 * Generates number of random geolocation points given a center and a radius.
 * @param  {Object} center A JS object with lat and lng attributes.
 * @param  {number} radius Radius in meters.
 * @param {number} count Number of points to generate.
 * @return {array} Array of Objects with lat and lng attributes.
 */
function generateRandomPoints(center, radius, count) {
    let points = [];

    for (let i = 0; i < count; i++) {
        points.push(generateRandomPoint(center, radius));
    }

    return points;
}


/**
 * Generates number of random geolocation points given a center and a radius.
 * Reference URL: http://goo.gl/KWcPE.
 * @param  {Object} center A JS object with lat and lng attributes.
 * @param  {number} radius Radius in meters.
 * @return {Object} The generated random points as JS object with lat and lng attributes.
 */
function generateRandomPoint(center, radius) {
    let x0 = center.lng;
    let y0 = center.lat;
    // Convert Radius from meters to degrees.
    let rd = radius / 111300;

    let u = Math.random();
    let v = Math.random();

    let w = rd * Math.sqrt(u);
    let t = 2 * Math.PI * v;
    let x = w * Math.cos(t);
    let y = w * Math.sin(t);

    let xp = x / Math.cos(y0);

    // Resulting point.
    return {coords: [y + y0, xp + x0]};
}


// Usage Example.
// Generates 100 points that is in a 1km radius from the given lat and lng point.
const randomGeoPoints = generateRandomPoints({'lat': 44.7866, 'lng': 20.4489}, 10000, 1000);

fs.writeFile("coords.ndjson", JSON.stringify(randomGeoPoints), (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
