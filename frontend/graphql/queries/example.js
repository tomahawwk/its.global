import gql from 'graphql-tag';

export const exampleQuery = gql`
    query exampleQuery {
        example {
        data {
            attributes {
                ExampleMenu {
                    link {
                        text
                        url
                        id
                    }
                }
                ExampleImage {
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