import { Stack, Box } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';
 
export default function Pagination() {
  return (
    <Stack 
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0 <strong>-10</strong> de <strong>100</strong></strong>
      </Box>

      <Stack
        direction="row"
        spacing="2"
      >
        <PaginationItem number={1} isCurrent={true}  />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}