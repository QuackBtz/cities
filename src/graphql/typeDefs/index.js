import { gql } from 'apollo-server'
import { cities } from './cities'

export const typeDefs = [
  gql`${cities}`
]