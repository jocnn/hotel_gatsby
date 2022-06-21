import * as React from "react"
import { graphql } from "gatsby"

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

const Habitacion = ({ data }) => {

  console.log(data)

  return (
    <>
      <h1>Habitacion</h1>
    </>
  )
}

export default Habitacion