import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "./layout"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: {slug: {eq: $slug }}) {
      nodes {
        slug
        contenido
        titulo
        imagen {
          gatsbyImageData(imgixParams: {maxW: 1200})
        }
      }
    }
  }
`

const Habitacion = ({ data: { allDatoCmsHabitacion: { nodes } } }) => {

  const { titulo, contenido, imagen } = nodes[0]

  return (
    <>
      <Layout>

        <main>
          <h1>{titulo}</h1>
          <p>{contenido}</p>
          <GatsbyImage image={imagen.gatsbyImageData} alt="imagen habitacion" />
        </main>

      </Layout>
    </>
  )
}

export default Habitacion