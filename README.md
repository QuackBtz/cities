# Cities Search
This repository creates a service to search cities using the jaro-winkler algorithm

**Run npm i to install al dependencies**

## ENV variables required

- **JARO_WINKLER_THRESHOLD:** this one define the default threshold for string comparision, every string with a value greater will be in the response
- **SERVER_PORT:** If this variable is not set, port 4000 will be set as default

## Testing queries:

*Search with no results*
```GraphQL
query {
  Cities(
    search: "SomeRandomCityInTheMiddleOfNowhere"
    minimumScore: 0.75
  ) {
    city {
      name
      lat
      long
    }
    score
  }
}
```

*Search with results, and using default score threshold*
```GraphQL
query {
  Cities(
    search: "Lond"
    #minimumScore: 0.75
  ) {
    city {
      name
      lat
      long
    }
    score
  }
}
```

## Work to do
- Generate a proper database to allow dynamic data insertion
- Validate used algotithm performance and replace it if needed
- Custom error validation, by now we depend on graphQL validations