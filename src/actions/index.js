// TODO: add and export your own actions
import cities from '../cities';

export function setActiveCity(activeCity) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: activeCity
  };
}

export function getCities() {
  return {
    type: 'GET_CITIES',
    payload: cities
  };
}
