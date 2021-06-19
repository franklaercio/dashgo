import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true}: ProfileProps) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Frank Laércio</Text>
          <Text color="gray.300" fontSize="small">frank@email.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Frank Laércio" src="https://github.com/franklaercio.png"/>
    </Flex>
  );
}