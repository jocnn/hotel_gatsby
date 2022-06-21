import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {

  const query = useStaticQuery(graphql`
    query {
      allDatoCmsSite {
        nodes {
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              description
              title
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return query.allDatoCmsSite.nodes[0].globalSeo

}

export default useSeo