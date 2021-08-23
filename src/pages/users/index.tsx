import { Box, Text, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Tbody, Td, Checkbox, useBreakpointValue, Spinner } from '@chakra-ui/react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { RiAddLine } from 'react-icons/ri';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    console.log(data);

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(user.create_at).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      };
    });

    return users;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    
  }, [])

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading sixe="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ): (error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos Usuários</Text>
            </Flex>
          ): (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuários</Th>

                  {isWideVersion && (
                    <Th>Data de Cadastro</Th>
                  )}
                </Tr>
              </Thead>
              <Tbody>
                {data.map(user => {
                  return (
                    <Tr>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>

                      {isWideVersion && (
                        <Td>{user.created_at}</Td>
                      )}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>

            <Pagination />
            </>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}