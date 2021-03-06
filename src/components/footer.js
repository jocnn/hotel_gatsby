import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Navigation from "./nav"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({ siteName }) => {

  const year = new Date().getFullYear()

  return (
    <>
      <footer
        css={css`
          background-color: rgb(44,62,80);
          padding: 1rem;
          margin-top: 5rem;
          `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navigation />

          <EnlaceHome
            to='/'
          >
            <h1>
              Hotel Gatsby
            </h1>
          </EnlaceHome>

        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33,44,55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {siteName}. Todos los derechos Reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer