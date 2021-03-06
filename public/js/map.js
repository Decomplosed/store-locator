mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVjb21wbG9zZWQiLCJhIjoiY2tjMzRnM2JoMXJrajJ0bjR4Z3prYWxrdyJ9.of8-eC8RizQ3B83vlkllKQ'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741],
})

// Fetch stores from API
async function getStores() {
  const res = await fetch('/api/v1/stores')
  const data = await res.json()

  const stores = data.data.map((store) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1],
        ],
      },
      properties: {
        storeId: store.storeId,
        icon: 'shop',
      },
    }
  })

  loadMap(stores)
}

// Load map with stores from API
function loadMap(stores) {
  map.on('load', function () {
    map.addSource('point', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: stores,
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
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
      },
    })
  })
}

getStores()
