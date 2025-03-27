// Mapbox configuration
export const MAPBOX_CONFIG = {
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  defaultCenter: {
    lat: 30.3753, // Pakistan center
    lng: 69.3451, // Pakistan center
  },
  defaultZoom: 5,
  maxZoom: 16,
  minZoom: 5,
  mapStyle: 'mapbox://styles/mapbox/streets-v12',
  clusterOptions: {
    maxZoom: 14,
    radius: 50
  },
  bounds: {
    north: 37.0841, // Pakistan northern boundary
    south: 23.6345, // Pakistan southern boundary
    east: 77.8375,  // Pakistan eastern boundary
    west: 60.8729   // Pakistan western boundary
  }
};