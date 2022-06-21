import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContentIndex from "../components/contentIndex"
import RoomPreview from "../components/roomPreview"

import useHabitacion from "../hooks/useHabitacion"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

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

        <ListadoHabitaciones>
          {
            habitaciones.map( habitacion => (
              <RoomPreview 
                key={habitacion.id}
                habitacion={habitacion}
              />
            ))
          }
        </ListadoHabitaciones>
      </div>

    </Layout>
  )
}

export default IndexPage