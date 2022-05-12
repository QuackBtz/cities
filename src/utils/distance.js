import jaroDistance from 'jaro-winkler'

/**
  * Found multiple articles describing jaro-winkler as a reliable algorithm
  * for string comparision, this utils file allow us to change this algorithm 
  * if needed without changing the main process
**/
export const distance = (search, reference) => {
  const result = jaroDistance(search, reference)
  return result.toFixed(4)
}
