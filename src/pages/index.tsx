/* ---------------------------------
Home (index.js)
--------------------------------- */

import * as React from "react"
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Spacer,
  Container,
  AspectRatio,
  Heading,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"

import { Stack, HStack, VStack } from "@chakra-ui/react"

import styled from "@emotion/styled"

/**
 * TODO move to own components
 */

const Circle = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rebeccapurple;
`

const Section: React.FC = ({ children, cWidth, ...props }) => {
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

/**
 *
 * HOME
 *
 */
export default () => (
  <>
    <Box as={"nav"} bg={"gray.100"}>
      {/*TODO*/}
      <Container maxWidth={"container.lg"}>
        <Flex justify={"space-between"} align={"center"} py={3}>
          <Box>
            {/*<Image src={"#"} />*/}
            Produkt
          </Box>

          <Spacer />

          <Box>
            <Button>Sign up</Button>
          </Box>
        </Flex>
      </Container>
    </Box>

    {/*
      SECTION
    */}

    <Section h={400} bg={"gray.50"} cWidth={"container.md"}>
      <Heading>Produkt</Heading>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <SimpleGrid columns={[1, 3]} spacing={5} w={"full"} py={16}>
        <Box p={5} shadow="md">
          <Heading fontSize="xl">Item 1</Heading>
          <Text mt={4}>alta muta Cur nixus congregabo?</Text>
        </Box>

        <Box p={5} shadow="md">
          <Heading fontSize="xl">Item 2</Heading>
          <Text mt={4}>Accentor de clemens brodium, imperium acipenser!</Text>
        </Box>

        <Box p={5} shadow="md">
          <Heading fontSize="xl">Item 3</Heading>
          <Text mt={4}>Volare etiam ducunt ad camerarius abnoba.</Text>
        </Box>
      </SimpleGrid>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <Flex py={16} w={"full"} wrap={["wrap", "nowrap"]}>
        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.100"} />

        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.50"} />
      </Flex>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <Flex py={16} w={"full"} wrap={["wrap", "nowrap"]}>
        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.50"} />

        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.100"} />
      </Flex>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <SimpleGrid columns={2} spacing={5} w={"full"}>
        <Box bg="gray.100" h={160} />
        <Box bg="gray.100" h={160} />
        <Box bg="gray.100" h={160} />
        <Box bg="gray.100" h={160} />
        <Box bg="gray.100" h={160} />
        <Box bg="gray.100" h={160} />
      </SimpleGrid>
    </Section>

    <Box as={"footer"} bg={"gray.100"} mt={5}>
      <Container>
        <Stack
          spacing={4}
          direction={["column", "row"]}
          justify={[null, "center"]}
          py={8}
        >
          <Link>Lorem</Link>
          <Link>Ipsum</Link>
          <Link>Dolor</Link>
          <Link>Sit</Link>
          <Link>Amet</Link>
        </Stack>
      </Container>
    </Box>

    {/*
      SECTION

    <Section>
    </Section>
    */}
  </>
)
