import {
    TableContainer,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
    Text,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function CardTable(props) {
    const { h2, h3, titles, subtitles } = props
    return (
      <Box width="26vw" bg="white" borderRadius="10px" m="10px 0" p={1}>
        <Box p={3}>
          <Text fontSize="2xl" as="b" color="#2B3674">{ h2 }</Text>
          <Text fontSize="sm" color="#A3AED0">{ h3 }</Text>
          <TableContainer>
            <Table coll>
              <Thead borderBottom="1px solid #E9EDF7">
                <Tr>
                  {
                      titles.map((title) => (
                          <Th key={ title } color="#A3AED0" fontSize="sm">{title}</Th>
                      ))
                  }
                </Tr>
              </Thead>
              <Tbody>
                  {
                      subtitles.map(({title, qtdClients, averagePrice}) => (
                          <Tr key={ title }>
                              <Td border="none" color="#2B3674" fontWeight="bold">{ title }</Td>
                              <Td border="none" color="#2B3674" fontWeight="bold">{ qtdClients }</Td>
                              <Td border="none" color="#2B3674" fontWeight="bold">{ averagePrice }</Td>
                          </Tr>
                      ))
                  }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  }