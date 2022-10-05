import gql from 'graphql-tag';

export const servicesQuery = gql`
  query servicesQuery {
    service {
      data {
        attributes {
          Image {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ServiceItem {
            title
            description
            id
          }
        }
      }
    }
  }
`