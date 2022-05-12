import { DataSource } from 'apollo-datasource'
import { distance } from '../utils/distance'
import 'dotenv/config'

// For testing porpouse
import fs from 'fs'


export default class CityAPI extends DataSource {
  constructor ({ store }) {
    super()
    // @TODO generate migrations and models for a strucutred DB, instead of a json file being loaded directly
    this.store = store
    
    const rawFile = fs.readFileSync('src/db/cities-canada-usa.json')
    this.cities = JSON.parse(rawFile)
  }

  async searchCityByName ({ search, minimumScore }) {
    const MIN_SCORE_REQUIRED = minimumScore || process.env.JARO_WINKLER_THRESHOLD
    
    const result = this.cities.map(city => {
      const newCityName = `${city.name}, ${city.country}`
      return { 
        score: distance (search, city.name),
        city: { ...city, name: newCityName }
      }
    })

    return result
      .filter(city => city.score > MIN_SCORE_REQUIRED)
      .sort((cityA, cityB) => cityB.score - cityA.score)
  }
}

