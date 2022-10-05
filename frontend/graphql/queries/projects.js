import gql from 'graphql-tag'

export const projectsQuery = gql`
	query projectsQuery {
		projects {
			data {
				attributes {
					Project {
						id
						Title
						Description
						Categories {
							text
						}
						ProjectMedia {
							Video {
								data {
									attributes {
										url
									}
								}
							}
						}
						ProjectAwards {
							Title
							Icon {
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
	}
`
