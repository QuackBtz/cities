export const cities = {
  Query: {
    Cities: async (_, data, { dataSources }) => {
      return dataSources.cityAPI.searchCityByName(data)
    }
  }
}