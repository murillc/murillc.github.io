import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  useColorMode,
  VStack,
  Text,
  Icon
} from '@chakra-ui/react'
import { personalData, links, softwareProjects, webappLinks} from './data';
import { FaGithub } from 'react-icons/fa'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import DataBox from './components/DataBox';

import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/acai');




function App() {
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <Box display={{ md: "flex" }} m = {10} spacing={3}>
        <VStack align="left" maxW = "md" minW = "sm">
          <Stack direction = "row">
            <Heading>
              Carlos Murillo
            </Heading>
            {/* <IconButton
              align="right"
              aria-label="Switch darkmode"
              icon={<FaMoon/>}
              onClick={toggleColorMode}
            >
              
            </IconButton> */}
          </Stack>
          
          <Box border = "1px" p={1} borderColor="gray.700">
            {personalData.intro}
          </Box>
          <SimpleGrid columns={2}>
            {links.map(
              link => (
                <Link
                  display="block"
                  href={link.link}
                  isExternal
                >
                  <HStack>
                    <Icon as={link.icon}></Icon>
                    <Text>{link.text}</Text>
                  </HStack>
                </Link>
              )
            )}
          </SimpleGrid>
        </VStack>
        
        <Tabs variant="enclosed-colored" mt={{ base: 4, md: 0 }} ml={{md: 3}}>
          <TabList>
            <Tab>Projects</Tab>
            <Tab>Webapps</Tab>
            <Tab>Raw Data</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack spacing={3}>
                {softwareProjects.map(project => (
                  <DataBox proj={project} />
                ))}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={3}>
                {webappLinks.map(project => (
                  <DataBox proj={project} />
                ))}
              </Stack>
            </TabPanel>
            <TabPanel>
            <JSONPretty
              mainStyle="padding:1em;"
              style={{ borderRadius: '20px' }}
              id="json-pretty"
              data={{
                personalData: { ...personalData },
                softwareProjects: { ...softwareProjects },
                webappLinks: { ...webappLinks },
              }}
              theme={JSONPrettyMon}
            ></JSONPretty>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
      </Box>
      {/* <GlobalStyle/> */}
    </>
  );
}

export default App;
