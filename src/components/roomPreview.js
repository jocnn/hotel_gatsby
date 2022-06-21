import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const RoomPreview = ({ habitacion }) => {

  const { titulo, contenido, imagen, slug } = habitacion

  return (
    <div>
      <div>
        <GatsbyImage image={imagen.gatsbyImageData} alt="imagen habitacion" />
        <h3>{titulo}</h3>
        <p>{contenido}</p>
      </div>
    </div>
  )
}

export default RoomPreview