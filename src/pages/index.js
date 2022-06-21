import * as React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContentIndex from "../components/contentIndex"
import RoomPreview from "../components/roomPreview"

import useHabitacion from "../hooks/useHabitacion"

const IndexPage = () => {

  const habitaciones = useHabitacion()

  return (
  
    <Layout>

      <ImagenHotel />

      <ContentIndex />

      <div>
        <h2
          css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3rem;
          `}
        >
          Nuestras Habitaciones
        </h2>

        <ul>
          {
            habitaciones.map( habitacion => (
              <RoomPreview 
                key={habitacion.id}
                habitacion={habitacion}
              />
            ))
          }
        </ul>
      </div>

    </Layout>
  )
}

export default IndexPage