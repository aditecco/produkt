/* ---------------------------------
Home (index.js)
--------------------------------- */

import * as React from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react"

import styled from "@emotion/styled"
import Section from "../components/Section"

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

/**
 *
 * HOME
 *
 */
export default () => (
  <>
    {/*
      NAV
    */}
    <Box as={"nav"} bg={"gray.100"}>
      {/*TODO*/}
      <Container maxWidth={"container.lg"}>
        <Flex justify={"space-between"} align={"center"} py={3}>
          <Box>
            {/*<Image src={"#"} />*/}
            <Text as="samp">produkt</Text> <Text as="sup">beta</Text>
          </Box>

          <Spacer />

          <Box>
            <Button>Login / Sign up</Button>
          </Box>
        </Flex>
      </Container>
    </Box>

    {/*
      HERO
    */}

    <Section h={400} bg={"gray.200"} cWidth={"container.md"}>
      <Heading>Produkt.</Heading>
      <Text>A simple product page template.</Text>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <SimpleGrid columns={[1, 3]} spacing={5} w={"full"} py={8}>
        <Box p={5} shadow="md">
          <Heading fontSize="xl">Elevatus</Heading>
          <Text mt={4}>Lapsuss manducare in rusticus amivadum!</Text>
        </Box>

        <Box p={5} shadow="md">
          <Heading fontSize="xl">Agripetas</Heading>
          <Text mt={4}>Accentor de clemens brodium, imperium acipenser!</Text>
        </Box>

        <Box p={5} shadow="md">
          <Heading fontSize="xl">Hydra</Heading>
          <Text mt={4}>Volare etiam ducunt ad camerarius abnoba.</Text>
        </Box>
      </SimpleGrid>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <Heading as={"h3"} mt={4} size={"lg"}>
        Nunquam experientia
      </Heading>

      <Flex w={"full"} wrap={["wrap", "nowrap"]} py={8}>
        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.100"} />

        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.50"} />
      </Flex>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <Flex w={"full"} wrap={["wrap", "nowrap"]} py={8}>
        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.50"} />

        <Box w={["full", 1 / 2]} h={[250, 500]} p={5} bg={"gray.100"} />
      </Flex>
    </Section>

    {/*
      SECTION
    */}

    <Section>
      <Heading as={"h3"} mt={4} size={"lg"}>
        Rumors tolerare
      </Heading>

      <SimpleGrid columns={2} spacing={5} w={"full"} py={8}>
        {[1, 2, 3, 4, 5, 6].map(col => (
          <Box bg="gray.100" h={160} />
        ))}
      </SimpleGrid>
    </Section>

    {/*
      FOOTER
    */}

    <Box as={"footer"} bg={"gray.100"} mt={5}>
      <Container>
        <Stack
          spacing={4}
          direction={["column", "row"]}
          justify={[null, "center"]}
          py={8}
        >
          {["Lorem", "Ipsum", "Dolor", "Sit", "Amet"].map(item => (
            <Link href={"#"}>
              <Text as={"small"}>{item}</Text>
            </Link>
          ))}
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
