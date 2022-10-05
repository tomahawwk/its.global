import gql from 'graphql-tag';

export const footerQuery = gql`
  query footerQuery {
    footer {
      data {
        attributes {
          Office {
            text
          }
          Text {
            text
          }
          Email {
            text
            url
          }
          Socials {
            text
            url
          }
          Address {
            text
          }
        }
      }
    }
  }
`