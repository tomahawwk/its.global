import gql from 'graphql-tag';

export const heroQuery = gql`
  query heroQuery {
    hero {
      data {
        attributes {
          word {
            text
            id
          }
          first_image {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          second_image {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  } 
`