import store from '../db/models'
import CityAPI from './CityAPI'

export const apis = {
  cityAPI: new CityAPI({ store })
}