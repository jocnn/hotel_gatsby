import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ContentIndex = () => {

  const query = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: {slug: {eq: "index"}}) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(query)

  return (
    <>
      <h2>Título de Página</h2>
    </>
  )
}

export default ContentIndex