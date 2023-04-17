import React from "react";
import { Text, Container, Box, Flex } from "@chakra-ui/react";
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <Flex justify="space-between">
        <Box>
            <Text color="#707EAE">Principal/Dashboard</Text>
            <Text as='b' color="#2B3674">Velty Dashboard</Text>
        </Box>
        <SearchBar />
    </Flex>
  );
}