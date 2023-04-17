import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function Cotations(props) {
    const { title, totalValue, average, color, percent} = props;
  return (
    <Box p={2} width="20vw">
      <Box borderRadius="20px" backgroundColor="white" width="100%" minHeight="22vh">
          <Box align="start" p={4}>
            <Box bg="#F4F7FE" borderRadius="50%" align="center" justify="center" minHeight="50px" width="50px">
              <FontAwesomeIcon icon={faDollarSign} width="20px" color="#4318FF" style={ { paddingTop: '8px' } }/>
            </Box>
          </Box>
          
          <Box>
          <Text 
            as='b'
            marginLeft="16px"
            fontSize="3xl"
            color="black"
            display="inline"
          >
            R$ { totalValue }
          </Text>
          { percent && (
            <Text
            fontSize="sm"
            color="#A3AED0"
            display="inline"
            as='b'
            >
              {' '}
              { percent }
            </Text>)}
          </Box>
          <Text
            m="0 0 16px 16px"
            fontSize="sm"
            color="#A3AED0"
            >
            { title }
          </Text>
          <Text as='b' m="15px 0 0 16px" fontSize="sm" color={color}>R$ { average }</Text>
      </Box>
    </Box>
  )
}
