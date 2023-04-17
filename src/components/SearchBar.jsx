import React from 'react'
import { Flex, Box, InputGroup, Input, InputLeftElement, Image } from '@chakra-ui/react';
import { InfoOutlineIcon, MoonIcon, SearchIcon, BellIcon } from '@chakra-ui/icons'

export default function SearchBar() {
  return (
      <Box>
        <Flex width="422px" bg="#FFFFFF"  borderRadius="full" align="center" justify="space-around" p={2}>
          <InputGroup width="214px">
            <InputLeftElement
              pointerEvents='none'
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color='gray.300' />}
            />
            <Input type="text" placeholder="Busca" outline="none" border="none" borderRadius="full" backgroundColor="#F4F7FE"/>
          </InputGroup>
          <BellIcon color="#A3AED0" boxSize={5}/>
          <MoonIcon color="#A3AED0"/>
          <InfoOutlineIcon color="#A3AED0"/>
          <Image
            src='https://pps.whatsapp.net/v/t61.24694-24/321247994_706515517811635_3124728996807042510_n.jpg?ccb=11-4&oh=01_AdQhjfOpjIQMKPHfvp1Gc5C1PQG5M7OSlVoRYGE6m6Q7jQ&oe=644442C5'
            alt="profile picture"
            borderRadius="full"
            width="45.69px"
          />
        </Flex>
    </Box>
  )
}
