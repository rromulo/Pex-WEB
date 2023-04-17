import React, { useState } from 'react'
import { Flex, Link, Box } from '@chakra-ui/react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faChartSimple, faObjectGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from "../images/Logo.svg";
import vector from '../images/vector.svg';
import vector2 from '../images/vector2.svg';

export default function SideBar() {
  const [ focusLink, setFocusLink ] = useState(1)

  const items = [
    {
      id: 1,
      title: 'Dashboard',
      urlImg: faHouse
    },
    {
      id: 2,
      title: 'Vendas',
      urlImg: faCartShopping
    },
    {
      id: 3,
      title: 'Relatórios',
      urlImg: faChartSimple
    },
    {
      id: 4,
      title: 'Lojas parceiras',
      urlImg: faObjectGroup
    },
    {
      id: 5,
      title: 'Clientes',
      urlImg: faUser
    }
  ]

  return (
    <Box component="div" backgroundColor="#FFFFFF" height="110vh" width="12vw" align="center" borderBottomRightRadius="18px">
      <Box align="start" p={4} minHeight="13vh">
        <Image src={ Logo } alt="logo pex"/>
      </Box>
      <Flex
        width="12vw"
        direction="column"
        height="32vh"
        align="start"
        justify="space-between"
        borderTop="1px solid #F4F7FE"
        paddingLeft="8%"
      >
        {
          items.map((item, index) => (
            <Flex
              key={index}
              as="b"
              color={item.id === focusLink ? "#4318FF" : "#A3AED0"}
              borderRight={ item.id === focusLink ? "4px solid #4318FF" : '' }
              borderRadius="2px"
              width="100%"
              marginTop="20px"
            >
              <FontAwesomeIcon icon={item.urlImg} width="16.33px"/>
              <Link href="#" marginLeft="5px" onClick={() => setFocusLink(item.id)}>{ item.title }</Link>
            </Flex>
          ))
        }
             
        </Flex>
    </Box>
  )
}
