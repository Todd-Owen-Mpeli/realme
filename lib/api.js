const API_URL = "http://realmecms.local/graphql";

// Function to fetch API Request
async function fetchAPI(query, {variables} = {}) {
	const headers = {"Content-Type": "application/json"};

	const res = await fetch(API_URL, {
		method: "POST",
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	return json.data;
}

export async function getAllPostSlugs() {
	const data = await fetchAPI(`
    {
        posts(first: 1000) {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `);
	return data?.posts;
}

export async function getTitleAndTwoImages() {
	const data = await fetchAPI(`
    {
        pages {
          nodes {
            contentBuilder {
              flexibleContent {
                __typename
                ... on Page_Contentbuilder_FlexibleContent_TitleAndTwoImages {
                  title
                  imageOne {
                        id
                        sourceUrl
                    }
        		    imageOneLink {
        			    target
        			    title
        			    url
        			}
        			imageTwo {
        			    id
                        sourceUrl
        			}
        			imageTwoLink {
        		        target
        		        title
        		        url
        			}
                }
              }
            }
          }
        }
    }
    `);
	console.log(data?.pages.nodes[0].contentBuilder.flexibleContent[0]);

	return data?.pages.nodes[0].contentBuilder.flexibleContent[0];
}
