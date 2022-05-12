export const cities = `
  type City {
    name: String
    lat: Float
    long: Float
  }

  type CitySearchResponse {
    city: City
    score: Float
  }

  type Query {
    Cities (
      search: String!
      minimumScore: Float
    ): [CitySearchResponse]
  }
`