import Head from 'next/head'

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, injectGlobal } from 'styled-components'

import { Container } from 'rebass'


injectGlobal`
  * {
    text-rendering: geometricPrecision;
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    font-family: "Fira Sans";
    height: 100%;
    background-color: #fcfcfc;
  }
  /*
    Sticky Footer fix
    Based on: https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  */
  .site {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }
  .content {
    flex: 1 0 auto;
  }`

const theme = {
  maxWidth: 1024
}

export default class Layout extends React.Component {
  render () {
    const { children, disableFooter = false } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Arturo Filastò</title>
          <meta name="description" content="Free software developer for OONI @ The Tor Project. Interested in the world and the people that populate it.">
        </Head>
        <Container>
          { children }
        </Container>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}
