import React from 'react'
import { Flex, Input, Text, Box } from '@chakra-ui/react';
import { InfoOutlineIcon, MoonIcon, SearchIcon, BellIcon } from '@chakra-ui/icons'

export default function FilterDate() {
  return (
    <Box width="100%" margin="18px 0">
        <Flex p="10px 1%" maxWidth="644px" align="center" justify="space-between" bg="white" borderRadius="full">
            <Text color="#707EAE" as="b">Filtrar por data</Text>
            <Input
                placeholder="Data inicial"
                size="md"
                type="date"
                width="214px"
                borderRadius="full"
                bg="#F4F7FE"
            />
            <Input
                placeholder="Data final"
                size="md"
                type="date"
                width="214px"
                borderRadius="full"
                bg="#F4F7FE"
            />
        </Flex>
    </Box>
  )
}
//npm i --save @fortawesome/fontawesome-svg-core
/*
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

npm i --save @fortawesome/react-fontawesome@latest
*/