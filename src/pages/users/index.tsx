import { Box, Text, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Tbody, Td, Checkbox, useBreakpointValue } from '@chakra-ui/react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { RiAddLine } from 'react-icons/ri';
import Pagination from '../../components/Pagination';
import Link from 'next/link';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth="auto" px={6}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading sixe="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                Criar novo
              </Button>
            </Link>
          </Flex> 

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>

                { isWideVersion && (
                  <Th>Data de Cadastro</Th>
                )}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Frank Laércio</Text>
                    <Text fontSize="sm" color="gray.300">franklaercio@email.com</Text>
                  </Box>
                </Td>

                { isWideVersion && (
                  <Td>04 de abril de 2021</Td>
                )}  
              </Tr>
            </Tbody>
          </Table> 

          <Pagination />
        </Box>      
      </Flex>    
    </Box>
  );
}