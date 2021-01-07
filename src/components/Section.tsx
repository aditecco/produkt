/* ---------------------------------
Section
--------------------------------- */

import * as React from "react"
import { Box, Container } from "@chakra-ui/react"

type ContainerProps = {
  cWidth?: string
}

type SpreadProps = Record<string, unknown>

type OwnProps = ContainerProps & SpreadProps

const Section: React.FC<OwnProps> = ({ children, cWidth, ...props }) => {
  return (
    <Box as={"section"} {...props}>
      <Container
        centerContent
        maxWidth={cWidth ?? "container.lg"}
        h={"full"}
        justifyContent={"center"}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Section
