import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const TextInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    margin-bottom: 2rem;
  }
  p {
    line-height: 2;
    margin-top: 0px;
  }
`

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
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >{titulo}</h2>
      <TextInicio>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="imagen index" />
      </TextInicio>
    </>
  )
}

export default ContentIndex