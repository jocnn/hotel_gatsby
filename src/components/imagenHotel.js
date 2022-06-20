import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const ImagenHotel = () => {

  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: {
          eq: "8.jpg"
        }
      ) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const TextImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, .7), rgba(34, 49, 63, .7));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 4rem;
      margin: 0%;
      @media (min-width: 768px) {
        font-size: 5.8rem;
      }
    }
    p {
      font-size: 2rem;
      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
  `

  return (
    <ImageBackground
      tag="section"
      fluid={image.sharp.fluid}
    >
      <TextImagen>
        <h1>Bienvenido al Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextImagen>
    </ImageBackground>
  )
}

export default ImagenHotel