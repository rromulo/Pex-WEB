import React from 'react'
import { Text, Container, Box, Flex } from "@chakra-ui/react";

export default function SaleBalance(props) {
  const { title, value, percentage, color } = props
  return (
    <Box p={1} width="16.33vw" m="20px 0">
      <Box backgroundColor="#FFFFFF" borderRadius="20px" p="2% 4%">
        <Text color="#A3AED0">{ title }</Text>
        <Text as='b'>{ value }</Text>
        <Text as='b' color={color} display="block">{ percentage }</Text>
      </Box>
    </Box>
  )
}
