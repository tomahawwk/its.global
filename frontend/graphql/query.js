import gql from 'graphql-tag';

export const headerMenuQuery = gql`
  query headerMenuQuery {
    headerMenu {
      data {
        attributes {
          link {
            text
            url
            id
          }
        }
      }
    }
  }
`

export const heroWordsQuery = gql`
  query heroWordQuery {
    heroWord {
      data {
        attributes {
          Word {
            Word
          }
        }
      }
    }
  } 
`