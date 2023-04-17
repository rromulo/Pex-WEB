import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function MainCard(props) {
  const { title, totalValue, average, color} = props;
  return (
    <Box p={2} width="20vw">
      <Box borderRadius="20px" backgroundColor={ color } width="100%" minHeight="30vh">
          <Box align="start" p={4}>
            <Box bg="white" borderRadius="50%" align="center" justify="center" height="50px" width="50px">
              <FontAwesomeIcon icon={faDollarSign} width="20px" color={ color } style={ { paddingTop: '8px' } }/>
            </Box>
          </Box>
          
          <Text 
            as='b'
            marginLeft="16px"
            fontSize="3xl"
            color="white"
            display="block"
            >
            R$ { totalValue }
          </Text>
          <Text
            m="0 0 16px 16px"
            fontSize="2xl"
            color="white"
            >
            { title }
          </Text>
          <Box borderTop="1px solid white">
            <Text as='b' display="block" m="15px 0 0 16px" fontSize="xl" color="white">R$ { average }</Text>
            <Text marginLeft="16px" fontSize="xl" color="white">Média por cliente</Text>
          </Box>
      </Box>
    </Box>
  )
}
