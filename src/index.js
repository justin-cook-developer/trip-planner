console.log('Hello from JavaScript');

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoieHRyZW1lcGluZWFwcGxlIiwiYSI6ImNqdnRyeGJ5YzBnYjIzenAxYW1qcmxtN3MifQ.k26FeTLTUTK8xp_rrd8cYw'

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
})