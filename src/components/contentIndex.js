import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ContentIndex = () => {

  const query = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(
        filter: { slug: { eq: "index" } }
      ) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = query.allDatoCmsPagina.nodes[0]

  return (
    <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="imagen index" />
      </div>
    </>
  )
}

export default ContentIndex