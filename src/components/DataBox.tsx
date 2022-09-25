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
  proj: any;
  lockAspectRatio: boolean;
}

const DataBox = (props: Props) => {
  return (
    <>
      <Box display={{ md: "flex" }} className="pulse" borderRadius="lg">
        <Link fontSize="lg" href={props.proj.link} isExternal minW="350px">
          <AspectRatio ratio={props.lockAspectRatio ? 4 / 3 : 1}>
            <Image src={props.proj.img}></Image>
          </AspectRatio>
        </Link>
        <Box p={3}>
          <Stack isInline alignItems="center">
            <Link href={props.proj.link}>
                <Heading fontSize="lg">
                {props.proj.title}
                <span>
                    <Text fontSize="sm" fontWeight="normal">
                    {props.proj.date}
                    </Text>
                </span>
                </Heading>
            </Link>
          </Stack>

          {props.proj.text && (
            <Stack pt={3} spacing={3}>
              {props.proj.text &&
                props.proj.text.map((text: string) => (
                  <Text>- {text}</Text>
                ))}
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DataBox;
