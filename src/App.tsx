import React from 'react';
import {
  Button,
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  useColorMode,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react'
import { personalData, links, softwareProjects, aboutMe} from './data';
import { FaGithub } from 'react-icons/fa'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import DataBox from './components/DataBox';

import JSONPretty from 'react-json-pretty';
import AboutBox from './components/AboutBox';
var JSONPrettyMon = require('react-json-pretty/dist/acai');




function App() {
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <Box display={{ md: "flex" }} m = {10} spacing={3}>
        <VStack align="left" maxW = "md" minW = "350px">
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
          
          <Box p={1} border = "2px" borderColor="gray.600" borderRadius="lg">
            {personalData.intro}
          </Box>
          <SimpleGrid columns={2} spacing={4}>
            {links.map(
              link => (
                
                  <Link
                    display="block"
                    href={link.link}
                    isExternal
                  >
                    <Button
                      leftIcon={<link.icon />}
                      isFullWidth
                    >
                    {/* <HStack>
                      <Icon as={link.icon}></Icon>
                      <Text>{link.text}</Text>
                    </HStack> */}
                      {link.text}
                    </Button>
                  </Link>
              )
            )}
          </SimpleGrid>
        </VStack>
        
        <Tabs variant="enclosed-colored" mt={{ base: 4, md: 0 }} ml={{md: 3}}>
          <TabList>
            <Tab>About</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack spacing={3}>
                {/* {aboutMe.map(data => (
                  <AboutBox data={data}/>
                ))} */}
                <AboutBox intro={aboutMe.intro} data={aboutMe.data}/>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={3}>
                {softwareProjects.map(project => (
                  <DataBox proj={project} lockAspectRatio={true}/>
                ))}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Box display={{ md: "flex" }} className="pulse" borderRadius="lg" p={3}>
                Placeholder for eventual blogs etc.
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
      </Box>
      {/* <GlobalStyle/> */}
    </>
  );
}

export default App;
