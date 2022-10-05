import gql from 'graphql-tag';

export const headerQuery = gql`
  query headerQuery {
    header {
      data {
        attributes {
          menu {
            link {
                text
                url
                id
              }
          }
          logo {
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