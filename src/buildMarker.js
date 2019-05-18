import mapboxgl from 'mapbox-gl';

const images = {
  activities: 'http://i.imgur.com/WbMOfMl.png',
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
};

function buildMarker(map, coords, category) {
  if (!(category in images)) {
    category = 'activities';
  }

  const marker = document.createElement('div');
  marker.style.backgroundSize = 'contain';
  marker.style.width = '32px';
  marker.style.height = '39px';
  marker.style.backgroundImage = `url(${images[category]})`;

  new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
}

export default buildMarker;
