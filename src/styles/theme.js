import React, { useContext } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import {
  StylesProvider as MuiStylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core'
import PropTypes from 'prop-types'
import {
  ThemeContext,
  ThemeProvider as StyledThemeProvider
} from 'styled-components'

const breakpointValues = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xll: 2000
}

const theme = {
  colors: {
    primary: '#ED0065',
    secondary: '#0ABF98',
    background: '#282c34',
    white: '#fff',
    text: '#001226',
    textLight: '#66717d',
    surface: '#f7f7f7',
    surfaceDark: '#262626',
    link: '#0366db',
    linkDark: '#334151',
    shadow: '#17001938',
    placeholder: '#b2b2b2',
    separator: '#ccd0d4',
  },
  fonts: {
    primary: {
      regular: "'Dosis', sans-serif"
    },
    secondary: {regular: "'Lato', sans-serif"}
  }
}

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: 15,
    htmlFontSize: 15
  },
  palette: {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    }
  },
  breakpoints: { values: breakpointValues }
})

theme.mui = muiTheme

/**
 *  ThemeProvider
 */

export const ThemeProvider = ({ children }) => {
  return (
    <MuiStylesProvider injectFirst>
      <link
        href='https://fonts.googleapis.com/css2?family=Dosis:wght@300;500;700&family=Lato:wght@100;300;700&display=swap'
        rel='stylesheet'
      />
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </MuiStylesProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

ThemeProvider.defaultProps = {
  children: null
}

/**
 * Hooks
 */

export const useTheme = () => useContext(ThemeContext)

export default theme
