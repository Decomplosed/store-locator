mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVjb21wbG9zZWQiLCJhIjoiY2tjMzRnM2JoMXJrajJ0bjR4Z3prYWxrdyJ9.of8-eC8RizQ3B83vlkllKQ'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741],
})

function loadMap() {
  map.on('load', function () {
    map.addSource('point', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-71.157895, 42.707741],
            },
            properties: {
              storeId: '001',
              icon: 'shop',
            },
          },
        ],
      },
    })
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'point',
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      },
    })
  })
}
