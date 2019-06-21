import * as React from 'react'
import ThemeContext from '../context/ThemeContext'

const useTheme = () => {
  const theme = React.useContext(ThemeContext)
  return !!theme ? theme : { container: {}, item: {} }
}

export { useTheme }