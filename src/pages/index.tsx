/* ---------------------------------
Home (index.js)
--------------------------------- */

import React from "react"
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Spacer,
  Container,
} from "@chakra-ui/react"

import styled from "@emotion/styled"

const Circle = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rebeccapurple;
`

const Section: React.FC = ({ children }) => {
  return (
    <Box as={"section"}>
      <Container>{children}</Container>
    </Box>
  )
}

export default () => (
  <>
    <Box as={"nav"} bg={"gray.50"}>
      {/*TODO*/}
      <Container maxW={"960px"}>
        <Flex justify={"space-between"} align={"center"} py={3}>
          <Box>
            {/*<Image src={"#"} />*/}
            Logo
          </Box>

          <Spacer />

          <Box>
            <Button>Sign up</Button>
          </Box>
        </Flex>
      </Container>
    </Box>

    <Section>yo</Section>
  </>
)
