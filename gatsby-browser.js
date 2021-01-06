/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import themeOverrides from "./src/theme"

const theme = extendTheme(themeOverrides)

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
