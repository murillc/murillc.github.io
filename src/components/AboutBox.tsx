import React from 'react';
import {
  AspectRatio,
  Box,
  Text,
  Image,
  Heading,
  Link,
  Stack,
} from '@chakra-ui/react';

interface Props {
  intro: any;
  data: any;
}

const AboutBox = (props: Props) => {
  return (
    <>
      <Box display={{ md: "flex" }} className="pulse" borderRadius="lg">
        <Link fontSize="lg" href={props.intro.link} isExternal minW="350px">
          <AspectRatio ratio={1}>
            <Image src={props.intro.img}></Image>
          </AspectRatio>
        </Link>
        <Box p={3}>
          <Stack isInline alignItems="center">
            <Link href={props.intro.link}>
                <Heading fontSize="lg">
                  {props.intro.title}
                </Heading>
            </Link>
          </Stack>
          <Box pt={2}>
            {props.intro.text}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutBox;
